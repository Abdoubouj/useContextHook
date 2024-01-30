import React from 'react'
import Post from './Post';

const Posts = () => {
    const posts = [
        {
          id: 1,
          title: 'First Post',
          content: 'This is the content of the first post.',
        },
        {
          id: 2,
          title: 'Second Post',
          content: 'Content for the second post goes here.',
        },
        {
          id: 3,
          title: 'Third Post',
          content: 'Here is the content of the third post.',
        },
      ];
  return (
    <div className='d-flex gap-5 py-5'>
        {posts.map((post)=>(
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default Posts