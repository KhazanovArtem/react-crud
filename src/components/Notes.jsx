import React, { useEffect, useState } from 'react'
import { NewNote } from './NewNote'
import { Note } from './Note'
import './components.css'

export const Notes = () => {
    let [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('http://localhost:7777/notes')
            .then(response => response.json())
            .then(data => setNotes(data.map(item => <Note data={item.content} key={item.id} id={item.id} removeNote={removeNote} />)))
    }, [])

    function refresh() {
        fetch('http://localhost:7777/notes')
            .then(response => response.json())
            .then(data => setNotes(data.map(item => <Note data={item.content} key={item.id} id={item.id} removeNote={removeNote} />)))
    }

    async function handlerSubmit(event) {
        event.preventDefault();
        let data = {
            'id': 0,
            'content': event.target[0].value
        };

        await fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charser=utf-8'
            },
            body: JSON.stringify(data)
        });
        event.target[0].value = '';
        refresh();
    }

    async function removeNote(e) {
        const {id} = e.target;
        await fetch(`http://localhost:7777/notes/${id}`, {method: 'DELETE'});
        refresh();
    }

  return (
        <>
            <div className='notes-header'>
                <h2 className='notes-title'>Notes</h2>
                <button className='btn-notes-refresh' onClick={refresh}>
                    <img src="https://cdn.icon-icons.com/icons2/1883/PNG/512/twocirclingarrows1_120592.png"/>
                </button>
            </div>
            <div className='notes-list'>
                {notes}
            </div>
            <NewNote handlerSubmit={handlerSubmit} />
        </>
  )
}
