"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const findUser = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.count();
};

const createTaskSchema = z.object({
  taskTitle: z.string(),
});

export const createTask = async (userId: string, formData: FormData) => {
  const validatedFields = createTaskSchema.safeParse({
    taskTitle: formData.get("taskTitle"),
  });

  // console.log(validatedFields);

  if (!validatedFields.success) {
    return;
  }

  // console.log(validatedFields.data.taskTitle);
  await prisma.todo.create({
    data: {
      authorId: userId,
      title: validatedFields.data.taskTitle,
    },
  });

  revalidatePath("/tasks");
};
