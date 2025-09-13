import { handleSignIn } from "@/actions/login/sign-in";
import { handleSignOut } from "@/actions/login/sign-out";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { DoorOpen } from "lucide-react";

export default async function LoginButton() {
  const session = await auth();
  const hasAuthenticated = !!session?.user;

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
