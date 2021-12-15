
import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feeds/Feed'
import "./home.css"
import Post from '../../components/post/Post'

export default function Home() {
    return (
        <div>
            <>
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>
           </>
        </div>
    )
}
