import { useState } from 'react';

const PageForm = ({ addPage }) => {
  const [page, setPage] = useState({ title: '', body: '', author: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addPage(page)
    setPage({ title: '', body: '', author: '' })
  }

  return (
    <>
      <h1>New Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name='title'
          value={page.title}
          onChange={(e) => setPage({ ...page, title: e.target.value })}
          required
        />
        <label>Author</label>
        <input
          name='author'
          value={page.author}
          onChange={(e) => setPage({ ...page, author: e.target.value })}
          required
        />
        <label>Body</label>
        <textarea
          name='body'
          value={page.body}
          onChange={(e) => setPage({ ...page, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default PageForm;