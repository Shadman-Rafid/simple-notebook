import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, editNote } from "../../features/noteSlice";
import Edit from "../components/Edit";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuClipboardEdit } from "react-icons/lu";
import Delete from "../components/Delete";
import { ToastContainer, toast } from "react-toastify";

const TaskView = () => {
  const initialShow = 6;
  const [next, setNext] = useState(initialShow);
  const [visible, setVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [open, setOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});

  const [editedName, setEditedName] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedId, setEditedId] = useState();

  const { notes } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(deleteData?.id));
    setOpen(false);
    toast.success("Note Deleted successfully", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  function openDelete(note) {
    setOpen(true);
    setDeleteData(note);
  }

  const handleEdit = (note) => {
    setCurrentTask(note);
    setVisible(true);
    setEditedName(note.name);
    setEditedTitle(note.title);
    setEditedDescription(note.description);
    setEditedId(note.id);
  };

  const handleUpdate = () => {
    if (currentTask) {
      const updatedValues = {
        id: currentTask.id,
        name: editedName,
        title: editedTitle,
        description: editedDescription,
        createdAt: new Date().toString(),
      };
      dispatch(editNote(updatedValues));
      setVisible(false);
      setCurrentTask(null);
      toast.success("Note updated successfully", {
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

  if (visible) {
    return (
      <Edit
        setVisible={setVisible}
        editedName={editedName}
        editedTitle={editedTitle}
        editedDescription={editedDescription}
        setEditedName={setEditedName}
        setEditedTitle={setEditedTitle}
        setEditedDescription={setEditedDescription}
        handleUpdate={handleUpdate}
      />
    );
  }

  const handleLoadMore = () => {
    setNext((prev) => prev + 3);
  };

  return (
    <>
      <Helmet>
        <title>Task-View</title>
      </Helmet>
      <ToastContainer />
      <div className=" bg-yellow-200 w-full min-h-screen max-h-full px-8">
        <div className="container py-4">
          <h3 className="text-3xl text-pink-600 font-mono font-bold mt-4 mb-10 underline underline-offset-8">
            ALL SAVED NOTES
          </h3>
          <div className="grid grid-cols-3 gap-8">
            {notes.slice(0, next).map((note) => (
              <div
                className="shadow-md bg-white rounded-md px-4 py-3 border border-cyan-600 border-double"
                key={note.id}
              >
                <h3 className="font-sans font-bold text-xl text-cyan-600 underline underline-offset-8 pb-4">
                  {note.title}
                </h3>
                <div className="text-start">
                  <h3 className="font-serif">
                    <span className="font-sans font-bold">Name: </span>
                    <span className="text-indigo-700 font-semibold ps-2"> {note.name} </span>
                  </h3>
                  <h3 className="font-sans mb-2">
                    <span className="font-sans font-bold">Description: </span>
                    {note.description}
                  </h3>
                  <span className="text-sm font-sans text-gray-500">
                    {formatDistance(note.createdAt, new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <div className="flex justify-end gap-x-2">
                  <button
                    className="px-3 py-2 text-white font-medium rounded-md bg-emerald-500 hover:bg-emerald-600"
                    onClick={() => handleEdit(note)}
                  >
                    <LuClipboardEdit />
                  </button>
                  <button
                    className="px-3 py-2 text-white font-medium rounded-md bg-red-600 hover:bg-red-700"
                    onClick={() => openDelete(note)}
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {notes.length > next && (
            <div className="text-center">
              <button
                className="px-4 py-2 text-white bg-violet-700 hover:bg-fuchsia-800 font-medium rounded-md mt-6"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <Delete
        open={open}
        closeDialog={() => setOpen(false)}
        title={deleteData?.title}
        deleteFunction={handleDelete}
      />
    </>
  );
};

export default TaskView;
