import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const notesIntial = [
        {
            "_id": "649729b30938c6ade225be45",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title  update",
            "description": "Please wake up  early update",
            "tag": "Personal",
            "date": "2023-06-24T17:36:51.797Z",
            "__v": 0
        },
        {
            "_id": "649729dc18936695127d4a67",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-06-24T17:37:32.581Z",
            "__v": 0
        },
        {
            "_id": "6497d29b30938c6ade225be45",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title  update",
            "description": "Please wake up  early update",
            "tag": "Personal",
            "date": "2023-06-24T17:36:51.797Z",
            "__v": 0
        },
        {
            "_id": "649729dc18g936695127d4a67",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-06-24T17:37:32.581Z",
            "__v": 0
        },
        {
            "_id": "649729b309ds38c6ade225be45",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title  update",
            "description": "Please wake up  early update",
            "tag": "Personal",
            "date": "2023-06-24T17:36:51.797Z",
            "__v": 0
        },
        {
            "_id": "649729dc18sa936695127d4a67",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-06-24T17:37:32.581Z",
            "__v": 0
        },
        {
            "_id": "649729b309bb38c6ade225be45",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title  update",
            "description": "Please wake up  early update",
            "tag": "Personal",
            "date": "2023-06-24T17:36:51.797Z",
            "__v": 0
        },
        {
            "_id": "649729dc1qq8936695127d4a67",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": "my title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-06-24T17:37:32.581Z",
            "__v": 0
        }
    ]


    const [notes, setNotes] = useState(notesIntial)

    //Add a Note
    const addNote = (title, description, tag) => {
        //TODO: Api call
        console.log('adding a new note')
        const note = {
            "_id": "649729dc1qq8936695127d4a67",
            "user": "6496e0001b6ca2caa6d09c0a",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-06-24T17:37:32.581Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = () => {

    }

    //Edit a Note
    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;