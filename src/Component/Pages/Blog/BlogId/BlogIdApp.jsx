import React from "react";
import Footer from "../../../Footer/Footer";
import Nav from "../../../NavBar/Nav";
import NavHead from "../../../NavBar/NavHead";
import BlogIdHeader from "./BlogIdHeader/BlodIdHeader";
import { useParams } from "react-router-dom";
import BlogIdData from "./BlogIdData";

const BlogIdApp = () => {
    const { blogappId } = useParams();
    const myData = BlogIdData .find(data => data.id === blogappId)
     return (
        <div className="BlogIdApp">
             <Nav/>
             <NavHead/>
             <BlogIdHeader myData={myData}/>
             <Footer/>
        </div>
         
     )
}
export default BlogIdApp