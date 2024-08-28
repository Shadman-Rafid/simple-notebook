import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { MdPhoneAndroid } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [hideText, setHideText] = useState(true);
  const [hideText2, setHideText2] = useState(true);
  const [hideText3, setHideText3] = useState(true);
  const [charCount, setCharCount] = useState(200);

  const handleRequiredText = () => {
    setHideText(true);
  };
  const handleRequiredText2 = () => {
    setHideText2(true);
  };
  const handleRequiredText3 = () => {
    setHideText3(true);
  };

  const handleCharCount = (e) => {
    let max = 200;
    length = message.length;
    setCharCount(max - length);
  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCharCount(200);
      setHideText(true);
      setHideText2(true);
      setHideText3(true);

      toast.info("Your contact details is saved", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    } else {
      if (name === "" && email === "" && message === "") {
        setHideText(false);
        setHideText2(false);
        setHideText3(false);
        toast.warn("Required fields must be filled", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      } else if (name === "" && email === "") {
        setHideText(false);
        setHideText2(false);
        toast.warn("Required fields must be filled", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      } else if (name === "" && message === "") {
        setHideText(false);
        setHideText3(false);
        toast.warn("Required fields must be filled", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      } else if (email === "" && message === "") {
        setHideText2(false);
        setHideText3(false);
        toast.warn("Required fields must be filled", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      } else if (name === "") {
        setHideText(false);
        toast.warn("Required fields must be filled", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      } else if (email === "") {
        setHideText2(false);
        toast.warn("Required fields must be filled", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      } else {
        setHideText3(false);
        toast.warn("Required fields must be filled", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <ToastContainer />
      <div className=" bg-sky-100 w-full px-20">
        <h1 className="font-sans font-bold text-4xl text-sky-600 mb-16 pt-12 underline underline-offset-8">
          Contact Us
        </h1>
        <div className="flex justify-between text-start">
          <div className="text-stone-700 font-sans">
            <div className="mb-14">
              <div className="flex gap-5">
                <MdPhoneAndroid className="w-10 h-10" />
                <h2 className="text-3xl mb-2">Give us a call</h2>
              </div>
              <p className="text-lg ms-14">+880 1868 957 580</p>
            </div>
            <div className="mb-14">
              <div className="flex gap-5">
                <HiOutlineMail className="w-10 h-10" />
                <h2 className="text-3xl mb-2">Send us an email</h2>
              </div>
              <p className="text-lg ms-14">mohammadshadmanrafid@gmail.com</p>
            </div>
            <div>
              <div className="flex gap-5">
                <SlLocationPin className="w-10 h-10" />
                <h2 className="text-3xl mb-2">Location</h2>
              </div>
              <div className="text-lg ms-14">
                <p>House 18, Road 3</p>
                <p>DOHS, Bayezid Bostami</p>
                <p>Chattogram</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-4 box-border">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-white px-6 py-3 mb-6 outline-blue-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
              onKeyUp={handleRequiredText}
            />
            <p
              className="text-sm text-red-500 text-left -mt-5 mb-6 ps-4"
              hidden={hideText}
            >
              This field is required
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-white px-6 py-3 mb-6 outline-blue-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onKeyUp={handleRequiredText2}
            />
            <p
              className="text-sm text-red-500 text-left -mt-5 mb-6 ps-4"
              hidden={hideText2}
            >
              This field is required
            </p>
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full border border-white px-6 py-3 mb-6 outline-blue-400"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <textarea
              placeholder="Message"
              maxLength={200}
              rows={5}
              className="w-full border border-white px-6 pt-3 outline-blue-400 resize-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onKeyUp={(e) => handleCharCount(e)}
              onInput={handleRequiredText3}
            ></textarea>
            <p
              className="text-sm text-red-500 text-left mb-6 ps-4"
              hidden={hideText3}
            >
              This field is required
            </p>
            <p
              className={`text-sm text-right mb-2 mr-2 ${
                charCount <= 10 ? "text-red-500" : "text-slate-500"
              }`}
            >
              <span>{charCount}</span> characters remaining
            </p>
            <button
              className="bg-slate-800 text-white text-xl font-bold font-mono px-5 py-2 my-2 mb-16 rounded-md hover:bg-transparent hover:text-black hover:border border-slate-800"
              onClick={handleSaveContact}
            >
              SUBMIT
            </button>
          </div>
        </div>

        <div className="overflow-hidden pb-20 flex flex-col justify-center items-center">
          <h3 className="text-3xl font-medium mb-6">Google Map Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8773.702870577219!2d91.81217600668539!3d22.395592623879267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd86ab55d87fd%3A0x1d3aa56ec6278ed9!2sChittagong%20DOHS%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1724868778092!5m2!1sen!2sbd"
            width="1000"
            height="500"
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
