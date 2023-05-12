//*! lo del async es para forzar a que tarde para que tengamos botón de cargando

import { resolve } from "styled-jsx/css";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul
      style={{
        background: "#444",
        fontSize: " 10px",
        padding: "10px",
        listStyle: "none",
      }}
    >
      {comments.map((commet) => {
        return (
          <li key={commet.id} style={{ marginBottom: "10px" }}>
            <h2>{commet.name}</h2>
            <p>{commet.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
