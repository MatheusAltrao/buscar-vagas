"use server";

import { prisma } from "@/lib/prisma";

export async function getAllJobs(search?: string) {
  try {
    const jobs = await prisma.job.findMany({
      where: search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
    });
    return jobs;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}
