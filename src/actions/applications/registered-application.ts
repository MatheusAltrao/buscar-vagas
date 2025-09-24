"use server";

import { prisma } from "@/lib/prisma";

export async function registeredApplication(jobId: number, userId: string) {
  try {
    if (!userId || !jobId) {
      console.log("User ID or Job ID is missing.");
      return false;
    }

    const applicationAlreadyRegistered = await prisma.application.findFirst({
      where: {
        jobId: jobId,
        userId: userId,
      },
    });

    return applicationAlreadyRegistered;
  } catch (error) {
    console.error("Error checking registered application:", error);
    return false;
  }
}
