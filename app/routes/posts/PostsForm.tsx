import { ValidatedForm } from "remix-validated-form";
import { createPostValidator } from "~/modules/posts/posts.schema";

export default function PostsForm() {
  return (
    <ValidatedForm method="post" validator={createPostValidator}>
      <input type="text" name="title" />
      <button type="submit">Create Post</button>
    </ValidatedForm> 
  )
}
