import Link from "next/link";

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul>
      {comments.map((commet) => {
        return (
          <li key={commet.id}>
            <h2>{commet.name}</h2>
            <p>{commet.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
