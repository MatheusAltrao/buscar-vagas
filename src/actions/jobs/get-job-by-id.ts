"use server";

import { prisma } from "@/lib/prisma";

export async function getJobById(id: number) {
  if (!id) {
    console.log(id);
    throw new Error("getJobById ID is required");
  }

  try {
    const job = await prisma.job.findUnique({
      where: { id: id },
    });
    return job;
  } catch (error) {
    console.error("Failed to fetch job by ID:", error);
    return null;
  }
}
