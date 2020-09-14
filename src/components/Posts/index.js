import React from "react"
import Post from "./Post"
import Title from "../Title"
//import Banner from "../Banner"
const Posts = ({ posts, title }) => {
  return (
    <div className="section">
      <section className="posts">
        <Title title={title || "tüm yazılar"} />
        <div className="posts-center">
          <article>
            {posts.map(post => {
              return <Post key={post.id} {...post} />
            })}
          </article>
          <article></article>
        </div>
      </section>
    </div>
  )
}

export default Posts
