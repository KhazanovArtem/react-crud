import React from 'react'

export const NewNote = ({handlerSubmit}) => {
  return (
    <>
        <div className='new-note'>
            <h4>New Note</h4>
            <form className='new-note-form' onSubmit={handlerSubmit}>
                <textarea className='new-note-text' type='text' placeholder='Enter text'></textarea>
                <button className='btn-new-note' type='submit'>
                    <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-send_97591.png"/>
                </button>
            </form>
        </div>
    </>
  )
}
