import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BsPersonSquare } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const dispatch = useDispatch();
  const [charCount, setCharCount] = useState(200);

  const handleCharCount = (e) => {
    let max = 200;
    length = description.length;
    setCharCount(max - length);
  };

  const handleCheck = (e) => {
    setCheckBox(e.target.checked);
  };

  // Save Note Button handler
  const handleAddNote = (e) => {
    e.preventDefault();
    if (name !== "" && title !== "" && description !== "") {
      const newNote = {
        id: Date.now().toString(32),
        name,
        title,
        description,
        createdAt: new Date().toString(),
      };
      dispatch(addNote(newNote));
      setName("");
      setTitle("");
      setDescription("");
      setCharCount(200)
      setCheckBox(false)

      toast.success("Note added successfully", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    } else {
      toast.warn("Please fill up all input fields", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen bg-pink-200 flex justify-center items-center">
        <div className="w-5/12 bg-white border border-cyan-400 shadow-md rounded-md p-6 mt-4 box-border mb-28">
          <div>
            <h1 className="font-mono font-bold text-3xl text-rose-700 mb-6 mt-2 underline underline-offset-8">
              Add Your Note
            </h1>
            <div className="flex">
              <BsPersonSquare className="w-8 h-8 mr-2" />
              <input
                placeholder="Your Name"
                className="w-full rounded-md border border-cyan-800 px-4 py-3 mb-4 outline-none"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="flex">
              <MdOutlineDriveFileRenameOutline className="w-8 h-8 mr-2" />
              <input
                placeholder="Note Title"
                className="w-full rounded-md border border-cyan-800 px-4 py-3 mb-4 outline-none"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="flex">
              <FcViewDetails className="w-8 h-8 mt-12 mr-2" />
              <textarea
                placeholder="Type your note"
                maxLength={200}
                rows={5}
                className="w-full rounded-md border border-cyan-800 px-4 py-3 outline-none resize-none"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                onKeyUp={(e) => handleCharCount(e)}
              ></textarea>
            </div>
            <p
              className={`text-sm text-right mb-2 mr-2 ${
                charCount <= 10 ? "text-red-500" : "text-slate-500"
              }`}
            >
              <span>{charCount}</span> characters remaining
            </p>
            <div className="text-left mb-4 text-sm ml-8">
              <input
                type="checkbox"
                onClick={handleCheck}
                className="w-4 h-4 mx-1"
              />{" "}
              I want to add this note
            </div>
            <button
              className="bg-rose-600 text-white text-base font-bold font-mono px-5 py-2 my-2 rounded-md disabled:bg-rose-300 hover:bg-rose-700"
              onClick={handleAddNote}
              disabled={!checkBox}
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
