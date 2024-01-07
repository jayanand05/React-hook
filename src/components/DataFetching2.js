import axios from "axios";
import React, { useEffect, useState } from "react";
dededed
function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {post.title}
    </div>
  );
}

export default DataFetching2;
