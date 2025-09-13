"use server";

import { prisma } from "@/lib/prisma";

export async function getAllJobs() {
  try {
    const jobs = await prisma.job.findMany();
    return jobs;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}
