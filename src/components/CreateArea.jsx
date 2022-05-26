import React, { useState } from "react";

// Using components from material ui
import AddIcon from '@mui/icons-material/Add';  // Importing 'add icon' from 'Material UI' as a component
import Fab from '@mui/material/Fab';    // Importing 'Floating Action Buttons (Fab)' from 'material UI' as a component
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    var [initialState, setInitialState] = useState("small")

    function handleState() {
        setInitialState("large")
    }

    return (
        <div>
            <form className="create-note">

                <div style={{ display: initialState == "small" ? "none" : null }}>
                    <input onChange={props.changeTitle} value={props.title} name="title" type="text" placeholder="Title..." />
                </div>


                <textarea onClick={handleState} onChange={props.changeContent} value={props.content} name="content" type="text" placeholder="Take a note..." rows={initialState == "small" ? "1" : "3"} />

                {/* Using Zoom component to add animation to the button */}
                <Zoom in={initialState == "small" ? false : true}>
                        <Fab onClick={props.addFunction}>
                            <AddIcon />
                        </Fab>
                </Zoom>

            </form>
        </div>
    );
}

export default CreateArea;
