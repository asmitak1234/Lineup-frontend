 /* // # <!-- Made By - Asmita Kumari --> */


import React, { useState } from "react";
import "../styles/Note.css";
import api from "../api";

function Note({ note, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(note.title);
    const [editContent, setEditContent] = useState(note.content);
    const [isCompleted, setIsCompleted] = useState(note.completed);

    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    const handleUpdate = (e) => {
        e.preventDefault();
        api
            .put(`/api/notes/${note.id}/`, { title: editTitle, content: editContent, completed: isCompleted })
            .then((res) => {
                if (res.status === 200) {
                    onUpdate(note.id, { title: editTitle, content: editContent, completed: isCompleted });
                    setIsEditing(false); // Hide form
                } else {
                    alert("Failed to update note.");
                }
            })
            .catch((err) => alert(err));
    };

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="note-container">
            {isEditing ? (
                <form onSubmit={handleUpdate}>
                    <label htmlFor="edit-title">Title:</label>
                    <input
                        type="text"
                        id="edit-title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="edit-content">Description:</label>
                    <textarea
                        id="edit-content"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={handleCheckboxChange}
                        />
                        Completed
                    </label>
                    <br />
                    <button className="edit-button mx-2" type="submit">Update</button>
                    <button type="button" className="cancel-button mx-2" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <div className="note-header">
                        <div className={`status-indicator ${isCompleted ? 'completed' : 'incomplete'}`}></div>
                        <p className="note-title">{note.title}</p>
                    </div>
                    <p className="note-content">{note.content}</p>
                    <div className="note-footer">
                        <p className="note-date">{formattedDate}</p>
                    </div>
                    <button className="delete-button" onClick={() => onDelete(note.id)}>
                        Delete
                    </button>
                    <button className="edit-button mx-2" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
        </div>
    );
}

export default Note;



// import React, { useState} from "react";
// import "../styles/Note.css";
// import api from "../api"; // Ensure you import the API instance

// function Note({ note, onDelete, onUpdate }) {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editTitle, setEditTitle] = useState(note.title);
//     const [editContent, setEditContent] = useState(note.content);

//     const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         api
//             .put(`/api/notes/${note.id}/`, { title: editTitle, content: editContent })
//             .then((res) => {
//                 if (res.status === 200) {
//                     onUpdate(note.id, { title: editTitle, content: editContent }); // Notify parent about the update
//                     setIsEditing(false); // Hide form
//                 } else {
//                     alert("Failed to update note.");
//                 }
//             })
//             .catch((err) => alert(err));
//     };

//     return (
//         <div className="note-container">
//             {isEditing ? (
//                 <form onSubmit={handleUpdate}>
//                     <label htmlFor="edit-title">Title:</label>
//                     <input
//                         type="text"
//                         id="edit-title"
//                         value={editTitle}
//                         onChange={(e) => setEditTitle(e.target.value)}
//                     />
//                     <label htmlFor="edit-content">Description:</label>
//                     <textarea
//                         id="edit-content"
//                         value={editContent}
//                         onChange={(e) => setEditContent(e.target.value)}
//                     />
//                     <br />
//                     <button className="edit-button mx-2" type="submit">Update</button>
//                     <button type="button" className="cancel-button mx-2" onClick={() => setIsEditing(false)}>Cancel</button>
//                 </form>
//             ) : (
//                 <>
//                     <p className="note-title">{note.title}</p>
//                     <p className="note-content">{note.content}</p>
//                     <p className="note-date">{formattedDate}</p>
//                     <button className="delete-button" onClick={() => onDelete(note.id)}>
//                         Delete
//                     </button>
//                     <button className="edit-button mx-2" onClick={() => setIsEditing(true)}>
//                         Edit
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// }

// export default Note;


// import React from "react";
// import "../styles/Note.css"

// function Note({ note, onDelete}) {
//     const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

//     return (
//         <div className="note-container">
//             <p className="note-title">{note.title}</p>
//             <p className="note-content">{note.content}</p>
//             <p className="note-date">{formattedDate}</p>
//             <button className="delete-button" onClick={() => onDelete(note.id)}>
//                 Delete
//             </button>
//         </div>
//     );
// }

// export default Note
