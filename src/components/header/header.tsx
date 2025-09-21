import Link from "next/link";
import LoginButton from "./login-button";

export default function Header() {
  return (
    <header className="w-full border-b py-4">
      <div className="flex items-center justify-between layout-area">
        <Link href={"/"}>
          <h1 className="text-xl font-semibold">
            Busca<span className="text-primary">Vagas</span>{" "}
          </h1>
        </Link>
        <LoginButton />
      </div>
    </header>
  );
}
