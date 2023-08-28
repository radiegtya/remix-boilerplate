import { ActionArgs, redirect } from "@remix-run/node"
import { useLoaderData, useNavigation } from "@remix-run/react"
import { createPost, getPosts } from "~/modules/posts/posts.service"
import { createPostSchema } from "~/modules/posts/posts.schema"
import PostsForm from "./PostsForm"


export async function loader() {
    return await getPosts()
}

export async function action({request}: ActionArgs) {
    const formData = await request.formData()
    const data = createPostSchema.parse(Object.fromEntries(formData))

    await createPost(data)

    return redirect('/posts')
}

export default function Posts() {
    const posts = useLoaderData<typeof loader>()
    const { state } = useNavigation()

    return (
        <>
            {state === "loading"?(
                <h1>Loading...</h1>
            ):(
                <ul>
                    {posts.map(post=> (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            )}            

            <h3>Create Post</h3>

            <PostsForm/>
        </>
    )
}