import { CalendarToday, LocalActivity, Mail, PhoneAndroid } from '@material-ui/icons'
import { PermIdentity, Publish } from '@mui/icons-material'
import React from 'react'
import "./user.css"
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='user'>
        <div className="userTitileContainer">
          <h1 className="userTitile">Edit Title</h1>
          <Link to={"/newUser"}>
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://thumbs.dreamstime.com/z/electrician-cute-character-professional-set-flat-design-electrician-cute-character-professional-set-flat-design-131136750.jpg" 
                    alt="electrical enginerr" 
                    className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUserName">Duc Do Minh</span>
                <span className="userShowTitle">Software Enginerr</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowBotTitile">Account Detail</span>
              <div className="userShowInfo">
                <PermIdentity className='usershowBotIcon'></PermIdentity>
                <span className="userShowBotInfoTitle">DmD2001</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className='usershowBotIcon'/>
                <span className="userShowBotInfoTitle">20.13.2001</span>
              </div>
              <span className="userShowBotTitile">Contact</span>
              <div className="userShowInfo">
                <PhoneAndroid className='usershowBotIcon'/>
                <span className="userShowBotInfoTitle">123456789</span>
              </div>
              <div className="userShowInfo">
                <Mail className='usershowBotIcon'/>
                <span className="userShowBotInfoTitle">ducdo@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocalActivity className='usershowBotIcon'/>
                <span className="userShowBotInfoTitle">HCM|VN</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className='userUpdateForm'>
              <div className="userUpdateLeft">
                <div className="userupDateLeftItem">
                  <label>User Name</label>
                  <input type="text" placeholder='DmD2001' className="userUpdateInput" />
                </div>
                <div className="userupDateLeftItem">
                  <label>BirthDay</label>
                  <input type="text" placeholder='23.10.2001' className="userUpdateInput" />
                </div>
                <div className="userupDateLeftItem">
                  <label>Phone</label>
                  <input type="text" placeholder='123456789' className="userUpdateInput" />
                </div>
                <div className="userupDateLeftItem">
                  <label>Email</label>
                  <input type="text" placeholder='ducdo@gmail.com' className="userUpdateInput" />
                </div>
                <div className="userupDateLeftItem">
                  <label>Address</label>
                  <input type="text" placeholder='HCM | VN' className="userUpdateInput" />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateLoad">
                  <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" alt="Avatar" className="userUpdateImg" />
                  <label htmlFor="file"><Publish className='userUpdatePublish'></Publish></label>
                  <input type="file" className="userUpdateInput" id="file" style={{display : 'none'}}/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
