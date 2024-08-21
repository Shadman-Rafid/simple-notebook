import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../features/noteSlice";
import Edit from "../components/Edit";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuClipboardEdit } from "react-icons/lu";
import Delete from "../components/Delete";

const TaskView = () => {
  const initialShow = 6;
  const [next, setNext] = useState(initialShow);
  const [visible, setVisible] = useState(false);
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
  };

  console.log(deleteData);

  const handleEdit = (note) => {
    setVisible(true);
    setEditedName(note.name);
    setEditedTitle(note.title);
    setEditedDescription(note.description);
    setEditedId(note.id);
  };

  if (visible) {
    return (
      <Edit
        setVisible={setVisible}
        editedName={editedName}
        editedTitle={editedTitle}
        editedDescription={editedDescription}
        editedId={editedId}
        setEditedName={setEditedName}
        setEditedTitle={setEditedTitle}
        setEditedDescription={setEditedDescription}
      />
    );
  }

  const handleLoadMore = () => {
    setNext((prev) => prev + 3);
  };

  function openDelete(note) {
    setOpen(true);
    setDeleteData(note);
  }

  return (
    <>
      <Helmet>
        <title>Task-View</title>
      </Helmet>
      <div className=" bg-yellow-200 w-full h-screen px-8">
        <div className="container py-4">
          <div className="grid grid-cols-3 gap-4 mt-4">
            {notes.slice(0, next).map((note) => (
              <div
                className="shadow-md bg-white rounded-md px-4 py-3 border border-cyan-600"
                key={note.id}
              >
                <h3 className="font-sans font-bold text-xl text-cyan-700 underline underline-offset-8 pb-4">
                  {note.title}
                </h3>
                <div className="text-start">
                  <h3 className="font-serif">
                    <span className="font-sans font-bold">Name: </span>
                    {note.name}
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
                    className="px-3 py-2 text-white font-medium rounded-md bg-teal-600"
                    onClick={() => handleEdit(note)}
                  >
                    <LuClipboardEdit />
                  </button>
                  <button
                    className="px-3 py-2 text-white font-medium rounded-md bg-red-600"
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
                className="px-4 py-2 text-white bg-pink-700 font-medium rounded-md mt-6"
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
