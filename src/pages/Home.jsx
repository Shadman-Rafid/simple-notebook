import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const dispatch = useDispatch();
  const [charCount, setCharCount] = useState(200);

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

      toast.success("Note added successfully", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.warn("Please fill up all input fields", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  const handleCheck = (e) => {
    setCheckBox(e.target.checked);
  };

  const handleCharCount = (e) => {
    let max = 200;
    length = description.length;
    setCharCount(max - length);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen bg-yellow-200 flex justify-center items-center">
        <div className="w-5/12 bg-white shadow-md rounded-md px-4 py-4 box-border mb-28">
          <div>
            <h1 className="font-mono text-3xl text-amber-800 mb-6 underline underline-offset-8">
              Add Your Note
            </h1>
            <input
              placeholder="Your Name"
              className="w-full rounded-md border border-cyan-800 p-2 mb-4 outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="Note Title"
              className="w-full rounded-md border border-cyan-800 p-2 mb-4 outline-none"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              placeholder="Type your note"
              maxLength={200}
              rows={5}
              className="w-full rounded-md border border-cyan-800 p-2 outline-none resize-none"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              onKeyUp={(e) => handleCharCount(e)}
            ></textarea>
            <p className="text-sm text-right text-slate-500 mb-2">
              <span>{charCount}</span> characters remaining
            </p>
            <div className="text-left mb-4">
              <input type="checkbox" onClick={handleCheck} /> I want to add this
              note
            </div>
            <button
              className="bg-amber-600 text-white text-base font-mono px-5 py-2 rounded-md"
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
