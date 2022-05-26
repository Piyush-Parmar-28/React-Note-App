import React from "react";

// Using Material UI
import DeleteIcon from '@mui/icons-material/Delete';    // Importing 'delete icon' from 'Material UI' as a component
import Fab from '@mui/material/Fab';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <Fab onClick={ ()=>{props.deleteFunction(props.thisID)} }>
                <DeleteIcon />
            </Fab>

        </div>
    );
}

export default Note;
