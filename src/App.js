import './App.css';
import Home from "./Components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import {Container} from "@mui/material";
import CreateBlog from "./Components/CreateBlog/CreateBlog";

function App() {
    return <BrowserRouter>
        <Container maxWidth={"xl"}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/blog/:id"} element={<Blogs/>}/>
                <Route path={"/create"} element={<CreateBlog/>}/>
            </Routes>
        </Container>
    </BrowserRouter>
}

export default App;
