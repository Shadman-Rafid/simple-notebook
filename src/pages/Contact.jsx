import { Hidden } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";

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
      <div className=" bg-sky-100 w-full px-8">
        <h1 className="font-sans font-bold text-4xl text-sky-600 mb-12 pt-12 underline underline-offset-8">
          Contact Us
        </h1>
        <div className="flex justify-end">
          <div className="w-1/2 p-4 box-border">
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
            className="bg-slate-800 text-white text-xl font-bold font-mono px-5 py-2 my-2 mb-20 rounded-md hover:bg-transparent hover:text-black hover:border border-slate-800 border-spacing-4"
            onClick={handleSaveContact}
          >
            SUBMIT
          </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
