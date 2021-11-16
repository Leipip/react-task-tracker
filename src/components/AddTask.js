import React from 'react'
import { useState } from 'react'

const AddTask = (props) => {
    const [text, setText] = useState('')
   // const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    props.onAdd({title: text, completed: reminder })

    setText('')
    //setDay('')
    setReminder(false)
  }  
    return (
        <form className="add-form" onSubmit={onSubmit}>
         <div className='form-control-check'>   
        <label >Task name:</label>
        <input type="text" placeholder='Add' 
        value={text} 
        onChange={(e) => setText(e.target.value)}/>

        </div>
        <div className='form-control form-control-check'> 
        <label>Is it completed?</label>
        <input type='checkbox' 
        value={reminder} 
        onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
