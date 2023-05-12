import { Suspense } from "react";
import { ListOfPost } from "./ListOfPosts";

export default async function PostPage() {

  return (
    <section>
      <Suspense fallback={<p>Cargando</p>}>
        {/* Esto es para esperar componentes en vez del loading */}
      <ListOfPost/>
      </Suspense>
    </section>
  );
}
