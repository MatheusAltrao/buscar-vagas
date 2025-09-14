"use server";

import { auth } from "@/lib/auth";

interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  image: string;
}

export async function authenticated() {
  const session = await auth();
  if (!session) {
    throw new Error("Usuário não autenticado");
  }

  const user = session.user;

  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  return user as AuthenticatedUser;
}
