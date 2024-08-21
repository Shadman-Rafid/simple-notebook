import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { editNote } from "../../features/noteSlice";

const Edit = ({
  setVisible,
  editedName,
  editedTitle,
  editedDescription,
  editedId,
  setEditedName,
  setEditedTitle,
  setEditedDescription,
  showToastify,
}) => {
  console.log(editedName, editedTitle, editedDescription);

  const dispatch = useDispatch();
  const handleUpdate = () => {
    const updatedValues = {
      id: editedId,
      name: editedName,
      title: editedTitle,
      description: editedDescription,
      createdAt: new Date().toString(),
    };
    dispatch(editNote(updatedValues));
    setVisible(false);
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
                className="absolute top-0 right-1 w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center cursor-pointer"
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
              maxLength={400}
              rows={5}
              className="w-full rounded-md border border-cyan-800 p-2 mb-4 outline-none resize-none"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            ></textarea>
            <button
              className="bg-amber-600 text-white text-base font-mono px-5 py-2 rounded-md"
              onClick={handleUpdate}
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
