import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Page() {
  // use params are important
  const { folder, name } = useParams(); // match route pattern /:folder/:name
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!folder || !name) return;

    fetch(`http://127.0.0.1:5000/api/${folder}/${name}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setData({ title: "Error", content: "Could not load data" }));
  }, [folder, name]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{data.title || name}</h1>
      <p>{data.content || JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

export default Page;
