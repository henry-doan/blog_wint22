const Page = ({ id, title, body, author, created_at }) => (
  <li>
    <h1>{title}</h1>
    <h3>By {author}</h3>
    <p>{body}</p>
    <p>
      created: {created_at}
    </p>
  </li>
)

export default Page;