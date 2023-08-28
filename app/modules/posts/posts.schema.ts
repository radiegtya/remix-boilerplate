import { withZod } from "@remix-validated-form/with-zod"
import { z } from "zod"

export const createPostSchema = z.object({
    title: z.string().min(1)
})

export const createPostValidator = withZod(createPostSchema)