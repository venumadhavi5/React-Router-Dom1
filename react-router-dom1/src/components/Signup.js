import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <form>
            <h2>Signup</h2>
            <div>
                <label>FirstName</label>
                <input></input>
            </div>
            <div>
                <label>LastName</label>
                <input></input>
            </div>
            <div>
                <label>Age</label>
                <input></input>
            </div>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <label>Mobile No</label>
                <input></input>
            </div>
            <div>
                <label>Profile Pic</label>
                <input></input>
            </div>
            <div>
                <button>Signup</button>
            </div>
        </form>
        <br></br>
        <br></br>
        <Link to='/'>Login</Link>
      
    </div>
  )
}

export default Signup
