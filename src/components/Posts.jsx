import { useEffect, useState } from "react";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError(err.message);
      });

  }, []);

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>

      <h2>Posts</h2>

      {posts.slice(0,10).map((post) => (

        <div key={post.id} className="post">

          <h3>{post.title}</h3>

          <p>{post.body}</p>

        </div>

      ))}

    </div>
  );
}

export default Posts;