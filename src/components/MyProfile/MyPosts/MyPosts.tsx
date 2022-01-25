import Post from "./Post/Post";
import style from "./Post/Post.module.css"
import React from "react";
import {MyPostsComponentType} from "./MyPostsContainer";
import {PostType} from "../../../redux/reduxStore";




function MyPosts({posts,  newInputText,onChange,onClick}:MyPostsComponentType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const post = (p:PostType,index:number) => <Post key={index} id={p.id} likeCount={p.likeCount} message={p.message}/>
    const postsElement = posts.map((p,index) => post(p,index))

    const onInputTextChange = () => newPostElement.current && onChange(newPostElement.current.value)
    const onAddPost = () => newPostElement.current && onClick(newPostElement.current.value)

    //JSX
    return (
        <div className={style.item}>
            <h3>my post</h3>
            <div>
                <textarea
                    onChange={onInputTextChange}
                    ref={newPostElement}
                    value={newInputText}
                > </textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                new post
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts