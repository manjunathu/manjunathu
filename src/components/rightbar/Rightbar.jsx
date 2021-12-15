import React from 'react'
import "./rightbar.css"
import {Users} from "../../DummyData"
import Online from '../online/Online'
export default function Rightbar({profile}) {
    const HomeRightbar =()=>{
   return(
     <>
          <div className="birthdayContainer">
                  <img className="birthdayImg" src="assests/gift.png" alt="" />
                  <span className="birhtdayText">
                      <b>Cristiano</b> and <b>4 other friends</b> have a birthday today
                  </span>
              </div>
              <img className="rightbarAd" src="assests/ad.png" alt="" />
              <h4 className="rightbarTitle"> Online Friends</h4>
              <ul className="rightbarFriendList">
                 {Users.map((u)=>(
                   <Online key={u.id} user={u}/>
                 ))}   
              </ul>
               </>
   ) ;
   };
    const ProfileRightbar=()=>{
        return (
            <>
            <h4 className="rightbarTitle"> User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Dubai</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle"> User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assests/person/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingname">Lee Chong Wei</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/person/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingname">Cristiano</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/person/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingname">Jordan</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/person/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingname">Thalapathy Vijay</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/person/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingname"></span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assests/person/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingname"></span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
          <div className="rightbarWrapper">
               {profile ? <ProfileRightbar/> : <HomeRightbar/>}
         
          </div>
        </div>
    )
}
