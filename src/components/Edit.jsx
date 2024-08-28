import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const Edit = ({
  setVisible,
  editedName,
  editedTitle,
  editedDescription,
  setEditedName,
  setEditedTitle,
  setEditedDescription,
  handleUpdate
}) => {
  let maxChar = 200;
  const [charCount, setCharCount] = useState(200 - editedDescription.length);

  const handleCharCount = (e) => {
    length = editedDescription.length;
    setCharCount(maxChar - length);
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-300 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center">
        <div className="w-2/5 bg-white shadow-md rounded-md px-4 py-4 box-border">
          <div>
            <div className="relative">
              <h1 className="font-mono text-3xl text-amber-800 mb-6 underline underline-offset-8">
                <u>Edit Your Note</u>
              </h1>
              <div
                className="absolute top-0 right-1 w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center cursor-pointer hover:bg-slate-400"
                onClick={() => setVisible(false)}
              >
                <ImCross />
              </div>
            </div>
            <input
              placeholder="Your Name"
              className="w-full rounded-md border border-cyan-800 p-2 mb-4 outline-none"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              placeholder="Note Title"
              className="w-full rounded-md border border-cyan-800 p-2 mb-4 outline-none"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              placeholder="Type your note"
              maxLength={200}
              rows={5}
              className="w-full rounded-md border border-cyan-800 p-2 outline-none resize-none"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              onKeyUp={(e) => handleCharCount(e)}
            ></textarea>
            <p
              className={`text-sm text-right mb-6 ${
                charCount <= 10 ? "text-red-500" : "text-slate-500"
              }`}
            >
              <span>{charCount}</span> characters remaining
            </p>
            <button
              className="bg-green-600 text-white text-base font-mono px-5 py-2 mr-6 rounded-md hover:bg-green-700"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-blue-700 text-white text-base font-mono px-5 py-2 rounded-md hover:bg-blue-900"
              onClick={() => setVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
