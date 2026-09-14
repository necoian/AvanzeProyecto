import { createFileRoute } from "@tanstack/react-router";
import { Tablero } from "@/components/tablero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Tablero />;
}
