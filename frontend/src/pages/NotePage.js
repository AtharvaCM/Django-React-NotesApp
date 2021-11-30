/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotePage = () => {
  const navigate = useNavigate();

  let params = useParams();
  let noteId = params.id;

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") return;

    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  // call to the backend to update database
  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  // code to delete a note
  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  let handleSubmit = () => {
    // note empty or new delete it
    if (noteId !== "new" && note.body === "") {
      deleteNote();
    } else if (noteId !== "new") {
      // update
      updateNote();
    } else if (noteId === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };

  let handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
