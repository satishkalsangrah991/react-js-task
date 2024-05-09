import React, { createRef, useEffect, useRef, useState } from 'react'
import Note from './Note';

const Notes = () => {

    const [notes, setNotes] = useState([
        {
          id: 0,
          text: "Link in bio Link in bio Link in bio Link in bio ",
        },
        {
          id: 1,
          text: "Like this Notes Like this Notes Like this Notes",
        },
      ]);
    
      const [note, setNote] = useState("");
    // console.log(notes)
    const noteRefs = useRef([]);
    // console.log(noteRefs.current)
    // const a =[]
    // console.log(noteRefs.current[1,2]?noteRefs.current[1,2]:noteRefs.current[1,2]=createRef())

    useEffect(() => {
        // localstorage logic
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const updatedNotes = notes?.map((note) => {
            const savedNote = savedNotes?.find((n) => n?.id === note?.id);
            // console.log(savedNote.position)
            if (savedNote) {
              return {...note, position: savedNote.position};
            } else {
              const position = determineNewPosition();
              return {...note, position};
            }
          });
      
          setNotes(updatedNotes);
       
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
      }, [notes.length]);
   
    //   const handleDragStart = (note, e) => {
    //     const {id} = note;
    //     const noteRef = noteRefs.current[id].current;
    //     const rect = noteRef.getBoundingClientRect();
    //     const offsetX = e.clientX - rect.left;
    //     const offsetY = e.clientY - rect.top;
    
    //     const startPos = note.position;
    
    //     const handleMouseMove = (e) => {
    //       const newX = e.clientX - offsetX;
    //       const newY = e.clientY - offsetY;
    
    //       noteRef.style.left = `${newX}px`;
    //       noteRef.style.top = `${newY}px`;
    //     };
    
    //     const handleMouseUp = () => {
    //       document.removeEventListener("mousemove", handleMouseMove);
    //       document.removeEventListener("mouseup", handleMouseUp);
    
    //       const finalRect = noteRef.getBoundingClientRect();
    //       const newPosition = {x: finalRect.left, y: finalRect.top};
    
    //       if (checkForOverlap(id)) {
    //         // check for overlap
    //         noteRef.style.left = `${startPos.x}px`;
    //         noteRef.style.top = `${startPos.y}px`;
    //       } else {
    //         updateNotePosition(id, newPosition);
    //       }
    //     };
    
    //     document.addEventListener("mousemove", handleMouseMove);
    //     document.addEventListener("mouseup", handleMouseUp);
    //   };
    

    const handleDragStart = (note, e) => {
        const { id } = note;
        const noteRef = noteRefs.current[id].current;
        const rect = noteRef.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
    
        const startPos = note.position;
    
        const handleMouseMove = (e) => {
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;
    
            // Ensure the element stays within the bounds of the window
            newX = Math.min(window.innerWidth - rect.width, Math.max(0, newX));
            newY = Math.min(window.innerHeight - rect.height, Math.max(0, newY));
    
            noteRef.style.left = `${newX}px`;
            noteRef.style.top = `${newY}px`;
        };
    
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
    
            const finalRect = noteRef.getBoundingClientRect();
            const newPosition = { x: finalRect.left, y: finalRect.top };
    
            if (checkForOverlap(id)) {
                // check for overlap
                noteRef.style.left = `${startPos.x}px`;
                noteRef.style.top = `${startPos.y}px`;
            } else {
                updateNotePosition(id, newPosition);
            }
        };
    
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };
    
      const checkForOverlap = (id) => {
        const currentNoteRef = noteRefs.current[id].current;
        const currentRect = currentNoteRef.getBoundingClientRect();
    
        return notes.some((note) => {
          if (note.id === id) return false;
    
          const otherNoteRef = noteRefs.current[note.id].current;
          const otherRect = otherNoteRef.getBoundingClientRect();
    
          const overlap = !(
            currentRect.right < otherRect.left ||
            currentRect.left > otherRect.right ||
            currentRect.bottom < otherRect.top ||
            currentRect.top > otherRect.bottom
          );
    
          return overlap;
        });
      };
    
      const updateNotePosition = (id, newPosition) => {
        const updatedNotes = notes.map((note) =>
          note.id === id ? {...note, position: newPosition} : note
        );
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
      };


    const determineNewPosition = () => {
        const maxX = window.innerWidth - 250;
        const maxY = window.innerHeight - 250;
    // console.log(maxX,maxY)
    
        return {
          x: Math.floor(Math.random() * maxX),
          y: Math.floor(Math.random() * maxY),
          };
        
      };


    // const determineNewPosition = () => {
    //     const maxX = window.innerWidth - 250; // Adjust 250 according to the width of your notes
    //     const maxY = window.innerHeight - 250; // Adjust 250 according to the height of your notes
    
    //     const scrollX = window.pageXOffset; // Get the horizontal scroll position
    //     const scrollY = window.pageYOffset; // Get the vertical scroll position
    // console.log(scrollX,scrollY)
    //     // Adjust maxX and maxY considering the scroll position
    //     const adjustedMaxX = maxX + scrollX;
    //     const adjustedMaxY = maxY + scrollY;
    
    //     return {
    //         x: Math.max(0, Math.floor(Math.random() * adjustedMaxX)), // Ensure x is within bounds
    //         y: Math.max(0, Math.floor(Math.random() * adjustedMaxY)), // Ensure y is within bounds
    //     };
    // };
    
    //  console.log( determineNewPosition())

  return (
  <>
        <div>
      <div
      className='hidden'
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   gap: "8px",
        //   marginTop: "30px",
        // }}
      >
        <input
          type="text"
          className='border-2 rounded-lg outline-none focus:outline-blue-500 focus:border-0 p-2'
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
        className='bg-blue-500 px-5 rounded-lg text-white hover:bg-blue-700'
          onClick={() => {
            setNotes([...notes, {id: notes.length + 1, text: note}]);
            setNote("");
          }}
        >
          Add Note
        </button>
      </div>

      {/* <Notes notes={notes} setNotes={setNotes} /> */}

      <div>
        {notes.map((note)=>{
            return(
                <>
                    <Note
                    key={note.id}
                    initialPos={note.position}
                    content ={note.text}
                    ref={
              noteRefs.current[note.id]
                ? noteRefs.current[note.id]
                : (noteRefs.current[note.id] = createRef())
            }

            onMouseDown={(e) => handleDragStart(note, e)}
                    />
                </>
            )
        })}
      </div>

    </div>
  </>
  )
}

export default Notes