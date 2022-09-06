import React from "react";
import "./Blogs.css";
import {Avatar} from "@mui/material";

function Blogs({blog}) {
    const {
        id,
        type,
        authorAvatar,
        authorName,
        coverImage,
        title,
        description
    } = blog
    return <div key={id}>
        <div className={"blog-item-wrap"}>
            <h3>{title}</h3>
            <img src={coverImage} alt={"cover"} className={"blog-item-cover"}/>
            <h3 className={"blog-item-type"}>{type}</h3>
            <p className={"blog-item-description"}>{description}</p>
            <footer>
                <div className={"blog-item-author"}>
                    <Avatar className={"blog-item-avatar"} src={authorAvatar} alt={"Name"}/>
                    <div>
                        <h6>{authorName}</h6>
                    </div>
                </div>
            </footer>

        </div>
    </div>
}
export default Blogs