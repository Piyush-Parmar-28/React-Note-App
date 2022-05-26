import React, { useState } from "react";

import ButtonAppBar from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    var [newTitle, setTitle] = useState("");
    var [newContent, setContent] = useState("");
    var [data, setData] = useState([]);

    function handleTitle(event) {
        setTitle(event.target.value)
    }

    function handleContent(event) {
        setContent(event.target.value)
    }


    function handleAddBtn(event) {

        event.preventDefault();

        setData((prevValue) => {
            return (
                [...prevValue,

                    {
                        newContent,
                        newTitle
                    }
                ]
            )
        })

        console.log("event called");

        setTitle("");
        setContent("");
    }

    function handleDelete(itemIndex) {
        console.log(itemIndex);

        setData((data) => {
            return (
                data.filter((items, index) => {
                        return index != itemIndex;
                    }
                )
            )

        })

        console.log(data);
    }

    return (
        <div >
            <ButtonAppBar />
            <CreateArea title={newTitle} content={newContent} changeTitle={handleTitle} changeContent={handleContent} addFunction={handleAddBtn} />

            <div className="noteDiv">
                {
                    data.map((textItem, index) => {
                        return (
                            // We can only pass functions here.
                            // We cannot call functions here.
                            // <Note deleteFunction={handleDelete(lastID)} key={textItem.id} title={textItem.newTitle} content={textItem.newContent} />     // Caling handleDelete() function here 


                            <Note 
                                thisID={index} 
                                deleteFunction={handleDelete} 
                                key={index} 
                                title={textItem.newTitle} 
                                content={textItem.newContent} 
                            />
                        )
                    })
                }
            </div>
            

            {/* <Footer /> */}
        </div>
    );
}

export default App;
