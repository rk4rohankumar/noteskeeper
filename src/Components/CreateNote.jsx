import React from 'react'

const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  const char = 100;
  const charLimit = char - inputText.length;
  
  return (
    <div className='note'>
      <textarea
        className='w-64 h-24 p-2 border border-gray-300 rounded'
        placeholder='Type...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={100}
      />
      <div className='note_footer'>
        <span className='label'>{charLimit} Left</span>
        <button className='note_save bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default CreateNote