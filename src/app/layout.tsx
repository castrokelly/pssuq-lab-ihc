import type { Metadata } from "next";
import type { ReactNode } from "react";
import { institution, team } from "../project.ts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PSSUQ Lab · IHC",
  description: `Base acadêmica para estudos de usabilidade com PSSUQ v3. ${institution.name}. ${institution.program}. ${institution.course}.`,
  authors: team.map(({ name, email }) => ({ name, url: `mailto:${email}` })),
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
