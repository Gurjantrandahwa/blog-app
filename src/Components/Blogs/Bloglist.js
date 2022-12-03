import React from "react";
import {Grid} from "@mui/material";
import Blogs from "./Blogs";


function BlogList({blogs}) {
    return <Grid container spacing={5}>
        {
            blogs && blogs.map((blog, id) => {
                return <Grid item md={4} sm={6} xs={12} key={id}>
                    <Blogs blog={blog}/>
                </Grid>
            })
        }
    </Grid>
}

export default BlogList