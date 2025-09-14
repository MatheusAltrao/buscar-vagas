"use server";

import { prisma } from "@/lib/prisma";
import { ApplicationSchema } from "@/schemas/application.schema";
import { authenticated } from "../session/authenticated";

interface CreateApplicationProps {
  jobId: number;
  description: string;
  githubLink: string;
}

export async function createApplication(data: CreateApplicationProps) {
  if (!data) {
    throw new Error("Dados da candidatura não fornecidos");
  }

  if (!data.jobId) {
    throw new Error("ID da vaga é obrigatório");
  }

  const validatedData = ApplicationSchema.parse(data);

  try {
    const user = await authenticated();
    const userId = user.id;

    const application = await prisma.application.create({
      data: {
        jobId: data.jobId,
        userId: userId,
        description: validatedData.description,
        githubLink: validatedData.githubLink,
      },
    });

    console.log("Candidatura criada com sucesso:", application);
  } catch (error) {
    throw new Error("Erro ao criar candidatura: " + error);
  }
}
