import React from 'react'

function Form() {
    const handleSubmit =()=>{
        alert(`submit succesfully!`);
    }
  return (
    <div>
        <form action={handleSubmit}>
            <label>User name</label><br/>
            <input type='username' name='username' /><br/>
            <label>Password</label><br/>
            <input type='password' name='password'/><br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
export default Form;