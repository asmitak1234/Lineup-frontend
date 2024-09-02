 /* // # <!-- Made By - Asmita Kumari --> */


import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    const [username, setUsername] = useState("");

    useEffect(() => {
        getNotes();
        getUser(); // Fetch user data on component mount
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const getUser = () => {
        api
            .get("/api/user/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}` // Ensure to include the token
                }
            })
            .then((res) => res.data)
            .then((data) => {
                setUsername(data.username);
            })
            .catch((err) => alert(err));
    };
    const deleteNote = (id) => {
        api
            .delete(`/api/notes/${id}/delete/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to create note.");
                setTitle(""); // Clear the title input
                setContent(""); // Clear the content input
                setIsFormVisible(false); // Hide the form after submission
                getNotes();
            })
            .catch((err) => alert(err));
    };

    const handleUpdate = (id, updatedNote) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, ...updatedNote } : note
            )
        );
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <div>
            <h3 className="text-center my-5">
                    Welcome, {username}! &#128522;
                </h3>
                <h1 className="text-center my-3"><strong>Your Tasks :</strong></h1>
                <div className="text-center">
                    <button className="btn btn-success btn-lg my-3" onClick={toggleFormVisibility}>
                        {isFormVisible ? "Cancel" : "Add Task"}
                    </button>
                </div>
                {isFormVisible && (
                    <div className="form-container">
                        <h2 className="text-center my-3">Create a Task :</h2>
                        <form onSubmit={createNote}>
                            <label htmlFor="title">Title:</label>
                            <br />
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <label htmlFor="content">Description:</label>
                            <br />
                            <textarea
                                id="content"
                                name="content"
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                )}
                {notes.map((note) => (
                    <Note
                        note={note}
                        onDelete={deleteNote}
                        onUpdate={handleUpdate}
                        key={note.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;

// import { useState, useEffect } from "react";
// import api from "../api";
// import Note from "../components/Note";
// import "../styles/Home.css";

// function Home() {
//     const [notes, setNotes] = useState([]);
//     const [content, setContent] = useState("");
//     const [title, setTitle] = useState("");
//     const [isFormVisible, setIsFormVisible] = useState(false);

//     useEffect(() => {
//         getNotes();
//     }, []);

//     const getNotes = () => {
//         api
//             .get("/api/notes/")
//             .then((res) => res.data)
//             .then((data) => {
//                 setNotes(data);
//                 console.log(data);
//             })
//             .catch((err) => alert(err));
//     };

//        const deleteNote = (id) => {
//         api
//             .delete(`/api/notes/${id}/delete/`)
//             .then((res) => {
//                 if (res.status === 204) alert("Note deleted!");
//                 else alert("Failed to delete note.");
//                 getNotes();
//             })
//             .catch((error) => alert(error));
//     };
//     const createNote = (e) => {
//         e.preventDefault();
//         api
//             .post("/api/notes/", { content, title })
//             .then((res) => {
//                 if (res.status === 201) alert("Note created!");
//                 else alert("Failed to make note.");
//                 setTitle(""); // Clear the title input
//                 setContent(""); // Clear the content input
//                 setIsFormVisible(false); // Hide the form after submission
//                 getNotes();
//             })
//             .catch((err) => alert(err));
//     };

//     const handleUpdate = (id, updatedNote) => {
//         setNotes((prevNotes) =>
//             prevNotes.map((note) =>
//                 note.id === id ? { ...note, ...updatedNote } : note
//             )
//         );
//     };

//     const toggleFormVisibility = () => {
//         setIsFormVisible(!isFormVisible);
//     };

//     return (
//         <div>
//             <div>
//                 <h1 className="text-center my-3">Tasks :</h1>
//                 <div className="text-center">
//                     <button className="btn btn-primary btn-lg my-3" onClick={toggleFormVisibility}>
//                         {isFormVisible ? "Cancel" : "Add Task"}
//                     </button>
//                 </div>
//                 {isFormVisible && (
//                     <div className="form-container">
//                         <h2 className="text-center my-3">Create a Task :</h2>
//                         <form onSubmit={createNote}>
//                             <label htmlFor="title">Title:</label>
//                             <br />
//                             <input
//                                 type="text"
//                                 id="title"
//                                 name="title"
//                                 required
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 value={title}
//                             />
//                             <label htmlFor="content">Description:</label>
//                             <br />
//                             <textarea
//                                 id="content"
//                                 name="content"
//                                 required
//                                 value={content}
//                                 onChange={(e) => setContent(e.target.value)}
//                             ></textarea>
//                             <br />
//                             <input type="submit" value="Submit" />
//                         </form>
//                     </div>
//                 )}
//                 {notes.map((note) => (
//                     <Note
//                         note={note}
//                         onDelete={deleteNote}
//                         onUpdate={handleUpdate}
//                         key={note.id}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Home;


// import { useState, useEffect } from "react";
// import api from "../api";
// import Note from "../components/Note"
// import "../styles/Home.css"

// function Home() {
//     const [notes, setNotes] = useState([]);
//     const [content, setContent] = useState("");
//     const [title, setTitle] = useState("");

//     useEffect(() => {
//         getNotes();
//     }, []);

//     const getNotes = () => {
//         api
//             .get("/api/notes/")
//             .then((res) => res.data)
//             .then((data) => {
//                 setNotes(data);
//                 console.log(data);
//             })
//             .catch((err) => alert(err));
//     };

//     const deleteNote = (id) => {
//         api
//             .delete(`/api/notes/${id}/delete/`)
//             .then((res) => {
//                 if (res.status === 204) alert("Note deleted!");
//                 else alert("Failed to delete note.");
//                 getNotes();
//             })
//             .catch((error) => alert(error));
//     };

//     const createNote = (e) => {
//         e.preventDefault();
//         api
//             .post("/api/notes/", { content, title })
//             .then((res) => {
//                 if (res.status === 201) alert("Note created!");
//                 else alert("Failed to make note.");
//                 getNotes();
//             })
//             .catch((err) => alert(err));
//     };

//     return (
//         <div>
//             <div>
//                 <h2 className="text-center my-3">Tasks : </h2>
//                 {notes.map((note) => (
//                     <Note note={note} onDelete={deleteNote} key={note.id} />
//                 ))}
//             </div>
//             <h2 className="text-center my-3">Create a Task :</h2>
//             <form onSubmit={createNote}>
//                 <label htmlFor="title">Title:</label>
//                 <br />
//                 <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     required
//                     onChange={(e) => setTitle(e.target.value)}
//                     value={title}
//                 />
//                 <label htmlFor="content">Description:</label>
//                 <br />
//                 <textarea
//                     id="content"
//                     name="content"
//                     required
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                 ></textarea>
//                 <br />
//                 <input type="submit" value="Submit"></input>
//             </form>
//         </div>
//     );
// }

// export default Home;
