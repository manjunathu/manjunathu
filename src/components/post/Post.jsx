import React from 'react'
import "./post.css"
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../DummyData'
import { useState } from 'react'

export default function Post({post}) {
   const [like, setLike] = useState(post.like)
   const [isliked, setIsLiked] = useState(false)
   const likeHandler=()=>{
       setLike(isliked ? like-1 : like+1)
       setIsLiked(!isliked)
   }
    return (
        <div className="post">
            <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                     <img className="postProfileimg" src={Users.filter((u) => u.id=== post?.userId)[0].profilePicture} alt="" />
                     <span className="postUsername">{Users.filter((u) => u.id=== post?.userId)[0].username}</span>
                     <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assests/heart.png" onClick={likeHandler} alt="" />
                    <img  className="likeIcon" src="assests/like.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}6 Comments</span>
                </div>
            </div>
            </div>
        </div>
    )
}