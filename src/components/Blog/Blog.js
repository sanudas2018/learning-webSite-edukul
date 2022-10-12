import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="blogContainer mx-auto w-[90%] p-10 mt-5">
        <div className="cartBlog mb-3 ">
          <div className="cartTitle">
            <h1 className="font-extrabold text-3xl mb-2">
              What is the purpose of the react router?
            </h1>
            <div className="line1"></div>
          </div>
          <div className="cartBody text-xl ">
            <p>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.Through it, data can be loaded very
              easily, links can be set by Route, navigation can be done and
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user. navigates.
            </p>
          </div>
        </div>
        <hr className="line my-6"></hr>

        {/* ==2===  */}
        <div className="cartBlog mb-3 ">
          <div className="cartTitle">
            <h1 className="font-extrabold text-3xl mb-2">
              How does context api work?
            </h1>
            <div className="line1"></div>
          </div>
          <div className="cartBody text-xl ">
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. Context
              provides a way to pass data through the component tree without
              having to pass props down manually at every level.Context provides
              works basically like Props but the main difference is that props
              go from parent to child but Context Api does not need to be done
              like this. Here if you add any data to application root through
              Context Api it can be accessed from full application.
            </p>
          </div>
        </div>
        <hr className="line my-6"></hr>

        {/* ===3===  */}
        <div className="cartBlog mb-3 ">
          <div className="cartTitle">
            <h1 className="font-extrabold text-3xl mb-2">
              What is useRef in react??
            </h1>
            <div className="line1"></div>
          </div>
          <div className="cartBody text-xl ">
            <p>
              We should not use DOM directly while doing any work with React. So
              it's best to use useRef.The useRef Hook allows you to persist
              values between renders. It can be used to store a mutable value
              that does not cause a re-render when updated. It can be used to
              access a DOM element directly. useRef returns a mutable ref object
              whose.current property is initialized to the passed argument (
              initialValue ). The returned object will persist for the full
              lifetime of the component. Essentially, useRef is like a “box”
              that can hold a mutable value in its .current property.It is
              imported directly from React.
            </p>
          </div>
        </div>
        <hr className="line my-6"></hr>
      </div>
    </div>
  );
};

export default Blog;
