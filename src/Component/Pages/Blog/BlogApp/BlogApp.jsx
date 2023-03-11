import React from "react";
import Nav from "../../../NavBar/Nav";
import NavHead from "../../../NavBar/NavHead";
import Footer from "../../../Footer/Footer";
import BlogHead from "../BlogHead/BlogHead";

function BlogApp(){
     return (
          <div className="BlogApp__div">
               <Nav/>
               <NavHead/>
               <BlogHead/>
               <Footer/>

          </div>
     )
}
export default BlogApp;