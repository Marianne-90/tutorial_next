import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPost = () => {
  //*! esto es para que se actualice cada cierto tiempo
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  //*! esto es para que sea dinámico si no se hace un html congelado
  //   return fetch("https://jsonplaceholder.typicode.com/posts",{cache: "no-store"}).then((res) =>
  //     res.json()
  //   );
};

export async function ListOfPost() {
  const posts = await fetchPost();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
        <LikeButton id={post.id} />
    </article>
  ));
}
