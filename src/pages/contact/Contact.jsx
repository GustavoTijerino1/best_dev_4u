// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
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
    <>
      <Navbar></Navbar>
      <h2>Hello World</h2>
    </>
  );
}
