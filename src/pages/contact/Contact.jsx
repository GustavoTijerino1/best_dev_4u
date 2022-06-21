import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "animate.css";
import Navbar from "../../components/navbar/Navbar";
import { GiRocketFlight } from "react-icons/gi";

export default function Contact() {
  const form = useRef();

  // const handleTextAreaKeyDown = (e) => {
  //   if (e.code === "Enter") {
  //     sendEmail(e);
  //   }
  // };

  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const { name, email, message } = userFormData;

    await fetch("https://courageous-dieffenbachia-b433fd.netlify.app/contact", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          window.location.reload(false);
          setShowAlert(true);
        },
        () => {}
      );
  };
  return (
    <div className="contact-bg">
      <Navbar />
      <div className="p-20">
        <div className="flex justify-center">
          <div
            className="flex 
            flex-col
            p-12
          text-xs md:text-base
            bg-gradient-to-br from-purple-800 to-grey-500 mt-10  w-fit justify-center"
          >
            <p className="mb-4 text-white uppercase">
              Email me, so we can
              <span className="underline text-purple-400"> work together </span>
              and build out of this world projects!!
            </p>

            <form
              className="space-y-2"
              method="POST"
              data-netlify="true"
              // action="/contact"
              ref={form}
              onSubmit={sendEmail}
            >
              {showAlert && (
                <div className="flex justify-center mt-4 ">
                  <h3
                    className="border-2  bg-green-600 text-white w-fit p-4 rounded animate__animated 
                animate__zoomIn"
                  >
                    Message sent!
                  </h3>
                </div>
              )}
              <input
                className="rounded w-full p-2"
                placeholder="Name"
                type="text"
                name="name"
                required
                onChange={handleInputChange}
              />
              <input
                className="rounded w-full p-2"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <input
                className="rounded w-full p-2"
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />

              <textarea
                type="text"
                className="
              pt-0
              pl-0
              w-full
              pb-20 
              rounded"
                placeholder="Message..."
                name="message"
                required
                // onKeyDown={handleTextAreaKeyDown}
                onChange={handleInputChange}
              />
              <div className="flex justify-center">
                <button
                  className=" p-2 rounded mt-2 border-2 hover:border-white border-purple-500 p-2 rounded-full hover:text-white hover:underline
                text-xs md:text-base
              bg-purple-200 hover:bg-purple-700 border-black
              w-auto
              
              flex flex-row"
                  type="submit"
                  disabled={
                    !(
                      userFormData.name &&
                      userFormData.email &&
                      userFormData.message
                    )
                  }
                >
                  Submit
                  <GiRocketFlight className="h-8 w-8" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
