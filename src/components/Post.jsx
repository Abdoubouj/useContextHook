import React from 'react'
import Button from './Button'

const Post = ({post}) => {
  return (
    <div className='card p-3'>
        <h1 className='card-title'>{post.title}</h1>
        <p className='card-text'>{post.content}</p>
        <Button/>
    </div>
  )
}

export default Post