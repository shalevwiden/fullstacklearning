import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Idpage() {
  const { id } = useParams(); // get page ID from URL
  const [data, setData] = useState<{ title: string; content: string } | null>(
    null
  );

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/page/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      // .catch is only for errors
      .catch(() => setData({ title: "Error", content: "Could not load data" }));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default Idpage;
