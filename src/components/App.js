import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// console.log(blogData);
const {name, image, about, posts} = blogData

const story = posts.map(post => {
  return <ArticleList key={post.id} post={post}/>
})

function App() {
  return (
    <div className="App">
      {/*You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={name}/>
      <About about={about} image={image}/>
      {story}

      {/* This also works */}
      {/* {posts.map(story => {
        const {id} = story
        
        return <ArticleList key={id} post={story}/>
      })} */}
    </div>
  );
}

export default App;
