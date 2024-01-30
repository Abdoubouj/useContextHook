import React, { useContext } from "react";
import Posts from "./Posts";
import { ThemeContext } from "../Context/ThemeContext";

const Blog = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="app p-5"
      style={{ background: `${theme === "light" ? "#fff" : "#333"}`,height:"100vh" }}
    >
      <h1 style={{color: `${theme === "light" ? "#333" : "#fff"}`}}>BLOG</h1>
      <button className="btn btn-secondary" onClick={toggleTheme}>
        {theme}
      </button>
      <Posts />
    </div>
  );
};

export default Blog;
