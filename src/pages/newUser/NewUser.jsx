import React from 'react'
import "./newuser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTiTile">New User</h1>
        <form action="" className="newUserForm">
            <div className="newUserListItem">
                <label>User Name</label>
                <input type="text" placeholder='Duc1023' className="newUserInput" />
            </div>
            <div className="newUserListItem">
                <label>Full Name</label>
                <input type="text" placeholder='Duc Do Minh' className="newUserInput" />
            </div>
            <div className="newUserListItem">
                <label>Email</label>
                <input type="mail" placeholder='ducdo@gmail.com' className="newUserInput" />
            </div>
            <div className="newUserListItem">
                <label>PassWord</label>
                <input type="password" placeholder='Inlcue number,character' className="newUserInput" />
            </div>
            <div className="newUserListItem">
                <label>Phone</label>
                <input type="text" placeholder='12345678' className="newUserInput" />
            </div>
            <div className="newUserListItem">
                <label>Address</label>
                <input type="text" placeholder='HCM | Vn' className="newUserInput" />
            </div>
            <div className="newUserListItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name='gender' id='male' value='male' />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value='female' />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id='other' value='other' />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
            <div className="newUserListItem">
                <label>Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
