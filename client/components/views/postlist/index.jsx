import React from 'react';

const PostList = ({posts}) => (
  <module className="posts module">
    <ul className="list">
      {posts.map(post => (
        <li key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </module>
);

export default PostList;
