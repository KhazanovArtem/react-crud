import React from 'react'

export const Note = ({data, id, removeNote}) => {
  return (
    <>
        <div className='note'>
            <p>{data}</p>
            <button className='btn-remove-note' onClick={removeNote} id={id}>
                <img id={id} src="https://cdn.icon-icons.com/icons2/1380/PNG/512/emblemunreadable_93487.png"/>
            </button>
        </div>
    </>
  )
}
