import { Counter } from "./Counter"



export default function PostLayout({children}){
    return (
        <div>
            <Counter/>
            <h1>este es el layout de los posts</h1>
            {children}
        </div>
    )
}