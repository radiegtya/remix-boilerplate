import { PrismaClient } from "@prisma/client"
import { z } from "zod"
import { createPostSchema } from "./posts.schema"

const prisma = new PrismaClient()

export async function getPosts() {
    return await prisma.post.findMany()
}

export async function createPost(data: z.infer<typeof createPostSchema>) {
    return await prisma.post.create({data})
}