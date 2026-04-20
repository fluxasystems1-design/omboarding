import "./globals.css";

export const metadata = {
  title: "Seguimiento Proyecto | Fluxa Method",
  description: "Propuesta comercial y plan de ejecucion de Fluxa Method",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
