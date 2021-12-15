import React from 'react'
import "./profile.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feeds/Feed'

export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="assests/posts/3.jpeg" alt="" />
                <img className="profileUserImg" src="assests/posts/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Manjunath</h4>
                    <span className="profileInfoDesc">hello my friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
           <Rightbar profile/>
            </div>
       
         </div>
        </div>
       </>
    )
}
