import { useNavigation, Form } from "@remix-run/react";
import { useEffect, useRef } from "react";

export default function PostsForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const { state } = useNavigation()
  const isSubmitting = state === "submitting"

  useEffect(()=> {
    if(isSubmitting)
      formRef.current?.reset()
  }, [isSubmitting])

  return (
    <Form method="post" ref={formRef}>
        <input type="text" name="title" />
        <button type="submit">Create Post</button>
    </Form> 
  )
}
