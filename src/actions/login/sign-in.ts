"use server";

import { signIn } from "@/lib/auth";

export async function handleSignIn() {
  await signIn("github");
}

export async function handleSignInRedirecToApplication(applicationId: number) {
  await signIn("github", { callbackUrl: `/applications/${applicationId}` });
}
