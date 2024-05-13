import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('blog post', () => {
    const blog = {
        author: "mark zucc",
        likes: 12,
        title: "blog.title",
        url: "blog.url",
        user: "blog.user.id"
    }
    let container
  
    beforeEach(() => {
      container = render(
        <Blog 
            blog={blog}
            currentUser='matrix'
            changeBlog={({ target }) => console.log(target.value)}
            deleteBlog={() => console.log('deleted')}
        />
      ).container
    })
  
    test('renders title and author only', async () => {
        await screen.findByText(`${blog.title} | ${blog.author}`)

        const div = container.querySelector('.dropdownElement')
        expect(div).toHaveStyle('display: none')

        // screen.debug()
    })
  
    // test('at start the children are not displayed', () => {
    //   const div = container.querySelector('.togglableContent')
    //   expect(div).toHaveStyle('display: none')
    // })
  
    test('after clicking the button url and likes are shown', async () => {
      const user = userEvent.setup()
      const button = screen.getByText('view')
      await user.click(button)

      await screen.findByText(`${blog.url}`)
      await screen.findByText(`${blog.likes}`)


      screen.debug()
  
      const div = container.querySelector('.dropdownElement')
      expect(div).not.toHaveStyle('display: none')
    })
  })