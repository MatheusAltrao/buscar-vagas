import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 pt-[15vh]">
      <h1 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>404</h1>
      <h2 style={{ fontSize: 24, fontWeight: 500, margin: "12px 0 8px" }}>
        Página não encontrada
      </h2>
      <p style={{ fontSize: 16, color: "#64748b", marginBottom: 32 }}>
        Desculpe, não conseguimos encontrar o recurso solicitado.
      </p>
      <Link
        href="/"
        style={{
          padding: "12px 28px",
          background: "#2563eb",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 16,
          boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
        }}
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
