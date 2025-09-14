"use server";

import { prisma } from "@/lib/prisma";
import { authenticated } from "../session/authenticated";

export async function getUserApplications() {
  try {
    const user = await authenticated();

    const applications = await prisma.application.findMany({
      where: {
        userId: user.id,
      },
      include: {
        job: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return applications;
  } catch (error) {
    console.error("Error fetching user applications:", error);
    return [];
  }
}
