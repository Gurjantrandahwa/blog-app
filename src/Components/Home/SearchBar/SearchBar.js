import React from "react";
import "./search.css";
import {Link} from "react-router-dom";
import {Button, Checkbox, ListItem, TextField} from "@mui/material";

function SearchBar({value, handleSearch,types_value,setTypeValues}) {
    return <div>
        <div className={"searchBar-wrapper"}>
            <div className={"header"}>
                <h1>Blogs</h1>
            </div>
                <TextField type={"text"}
                       placeholder={"Search"}
                       value={value}
                       onChange={handleSearch}/>
            <Link to={"/create"}>
                <Button>Create Blog</Button>
            </Link>

        </div>
        <div className={"checkbox"}>
            {["Tech","Entertainment","Community"].map((type, index) => {
                return <div key={index}>
                    <ListItem>
                        <Checkbox onChange={(event, checked) => {
                            if(types_value.includes(type)){
                                let index_type=types_value.findIndex(v=>v===type);
                                if(index_type>=0){
                                    let temp=[...types_value]
                                    temp.splice(index_type,1);
                                    setTypeValues(temp)
                                }
                            }else {
                               setTypeValues([...types_value,type])
                            }
                        }} checked={types_value.includes(type)}/>
                        <span className={"blog-item-type"}>{type}</span>
                    </ListItem>
                </div>
            })}
        </div>
    </div>
}

export default SearchBar