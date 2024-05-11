import { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, currentUser, changeBlog, deleteBlog }) => {
  const [blogVisible, setBlogVisible] = useState(false)
  
  const showWhenVisible = { display: blogVisible ? '' : 'none' }

  const toggleBlogVisibility = () => {
    setBlogVisible(!blogVisible)
  }

  const likeHandler = () => {
    const changedBlog = {
      author: blog.author,
      likes: blog.likes + 1,
      title: blog.title,
      url: blog.url,
      user: blog.user.id
    }

    changeBlog(blog.id, changedBlog, blog.user.name)
  }

  const removeBlogHandler = () => {
    deleteBlog(blog.id)
  }

  return (
    <div className='blog'>
      <span style={{fontWeight: 'bold'}}>
        {blog.title} | {blog.author}
      </span>
      <button onClick={toggleBlogVisibility}>{blogVisible ? 'hide' : 'view'}</button>
      <div style={showWhenVisible} className='dropdownElement'>
        {blog.url} <br />
        {blog.likes}
        <button onClick={likeHandler}>Like</button> <br />
        {blog.user.name} <br />
        {currentUser === blog.user.name && <button onClick={removeBlogHandler} >Remove</button>}    
      </div>
    </div>  
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  currentUser: PropTypes.string.isRequired,
  changeBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

export default Blog