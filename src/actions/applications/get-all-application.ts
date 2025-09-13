"use server";

import { prisma } from "@/lib/prisma";

export async function getAllApplications() {
  try {
    const applications = await prisma.application.findMany();
    return applications;
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    return [];
  }
}
