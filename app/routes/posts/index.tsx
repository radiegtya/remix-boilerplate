import { ActionArgs, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import PostsForm from "./PostsForm"
import { createPost, getPosts } from "~/modules/posts/posts.service"
import { createPostValidator } from "~/modules/posts/posts.schema"
import { validationError } from "remix-validated-form"


export async function loader() {
    return await getPosts()
}

export async function action({request}: ActionArgs) {
    const res = await createPostValidator.validate(await request.formData())
    if (res.error) {
        return validationError(res.error);
    }

    await createPost(res.data)

    return redirect('/posts')
}

export default function Posts() {
    const posts = useLoaderData<typeof loader>()

    return (
        <>
            <ul>
                {posts.map(post=> (
                    <li>
                        {post.title}
                    </li>
                ))}
            </ul>

            <h3>Create Post</h3>

            <PostsForm/>
        </>
    )
}
