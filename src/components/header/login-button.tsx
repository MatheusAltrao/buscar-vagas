import { handleSignIn } from "@/actions/login/sign-in";
import { handleSignOut } from "@/actions/login/sign-out";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import { DoorClosed, DoorOpen } from "lucide-react";
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size={"sm"}>
              {session?.user?.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2 p-3 w-48">
            <Link className="text-sm underline" href="/my-applications">
              <Button className="w-full" variant={"outline"} size={"sm"}>
                Minhas candidaturas
              </Button>
            </Link>
            <form className="w-full" action={handleSignOut}>
              <Button className="w-full" variant="destructive" size={"sm"}>
                <DoorClosed /> Sair
              </Button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
