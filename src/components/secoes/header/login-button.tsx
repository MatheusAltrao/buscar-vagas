import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/lib/auth";
import { DoorOpen } from "lucide-react";

export default async function LoginButton() {
  const session = await auth();
  const hasAuthenticated = !!session?.user;

  async function handleSignIn() {
    "use server";
    await signIn("github");
  }

  async function handleSignOut() {
    "use server";
    await signOut();
  }

  return (
    <div>
      {!hasAuthenticated && (
        <form action={handleSignIn}>
          <Button variant="outline" size={"sm"}>
            <DoorOpen /> Entrar
          </Button>
        </form>
      )}

      {hasAuthenticated && (
        <form action={handleSignOut}>
          <Button variant="secondary" size={"sm"}>
            {session?.user?.name}
          </Button>
        </form>
      )}
    </div>
  );
}
