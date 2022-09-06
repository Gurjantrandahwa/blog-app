import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar/SearchBar";
import BlogList from "../Blogs/Bloglist";
import EmptyList from "../../Common/EmptyList";
import db from "../../Common/firebase";

function Home() {
    const [blogs, setBlogs] = useState([])
    const [filteredBlogs, setFilteredBlogs] = useState([])
    const [search, setSearch] = useState("")
    const [types, setTypes] = useState(["Tech"]);

    useEffect(() => {
        if (search) {
            let filteredBlogs = blogs.filter(blog =>
                blog.title.toLowerCase().includes(search.toLowerCase().trim()) ||
                blog.description.toLowerCase().includes(search.toLowerCase().trim())
            )||[]
            filteredBlogs = filteredBlogs.filter(value => {
                return types.includes(value.type)
            });

            setFilteredBlogs(filteredBlogs);
        } else {
            let filteredBlogs = blogs.filter(value => {
                return types.includes(value.type)
            });
            setFilteredBlogs([...filteredBlogs])
        }

    }, [search, types])


    useEffect(() => {
        db.collection('Blogs').onSnapshot(snapshot => {
            let _temp_blog=snapshot.docs.map(doc => doc.data());
            setBlogs(_temp_blog)

            let filteredBlogs = _temp_blog.filter(value => {
                return types.includes(value.type)
            });
            setFilteredBlogs(filteredBlogs)

        })
    }, [])

    return <div>
        <SearchBar
            value={search}
            handleSearch={e => setSearch(e.target.value)}
            types_value={types}
            setTypeValues={setTypes}
        />
        {!filteredBlogs.length ? <EmptyList/> : <BlogList blogs={filteredBlogs}/>}

    </div>
}

export default Home