import React from "react";
import Blog from "./Blog";
// Keys used within arrays should be unique among their siblings.
// However they don't need to be globally unique.
// Keys serve as a hint to React but they don't get passed to your components.
// If you need the same value in your component, pass it explicitly as a
// prop with a different name:
const posts = [
  {
    id: 1,
    title: "Hello World",
    content: "Welcome to learning React!"
  },
  {
    id: 2,
    title: "Installation",
    content: "You can install React from npm."
  }
];
export default function Siblings() {
  return <Blog posts={posts} />;
}
