import { handleSignIn } from "@/actions/login/sign-in";
import { handleSignOut } from "@/actions/login/sign-out";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { DoorOpen } from "lucide-react";
import Link from "next/link";

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
        <div className="flex items-center gap-2">
          <Link className="text-sm underline" href="/my-applications">
            Minhas candidaturas
          </Link>
          <form action={handleSignOut}>
            <Button variant="secondary" size={"sm"}>
              {session?.user?.name}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
