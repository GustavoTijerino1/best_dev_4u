// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { GiRocketFlight } from "react-icons/gi";

export default function Contact() {
  //     const form = useRef();

  //   const [userFormData, setUserFormData] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  //   const [showAlert, setShowAlert] = useState(false);

  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setUserFormData({ ...userFormData, [name]: value });
  //   };

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
  //     )
  //     .then(
  //       () => {
  //         window.location.reload(false);
  //         setShowAlert(true);
  //       },
  //       () => {

  //       }
  //     );
  return (
    <div className="contact-bg">
      <Navbar></Navbar>
      <div
        className="flex justify-center p-20 
      
     border-2 border-rose-500"
      >
        <div
          className="flex 
        
        md:justify-end border-2 border-rose-500
        bg-stone-800 mt-10 p-20 w-fit justify-center"
        >
          <form
            className="flex-wrap 
            space-y-2 flex-col text-white"
          >
            {/* {showAlert && ( */}
            <div className="">
              <h1>Email me!!</h1>
              <p className="">
                Let us work together and build out of this world projects!!
              </p>
              <span className="flex justify-end">
                <GiRocketFlight className="h-8 w-8" />
              </span>
            </div>
            <div className="">
              <input
                className="rounded p-2"
                placeholder="Name"
                type="text"
                name="name"
                required
                //   onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                className="rounded p-2"
                name="email"
                type="email"
                placeholder="Email"
                //   onChange={handleInputChange}
                //   value={userFormData.email}
                required
              />
            </div>

            <textarea
              className="resize-none md:resize
              rounded p-2"
              placeholder="Message..."
              name="message"
              required

              // onChange={handleInputChange}
            />

            <button
              type="submit"
              // disabled={
              //   !(userFormData.name && userFormData.email && userFormData.message)
              // }
            >
              Submit
            </button>
          </form>
          {/* <Link to="/">
            <div className="span-border">
              <span className="span-link">Back To Home</span>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
