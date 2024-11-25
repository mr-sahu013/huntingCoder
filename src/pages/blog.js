import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the file from blogdata directory
//Step 2: Iterate through the and Display them
const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h2 className={styles.blogItemh3}>{blogitem.title}</h2>
              </Link>
              <p className={styles.blogItemp}>
                {blogitem.metadesc.substr(0, 140)}....
              </p>
              <p className={styles.blogItemauthor}>{blogitem.author}</p>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
