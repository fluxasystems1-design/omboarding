import "./globals.css";

export const metadata = {
  title: "Seguimiento Proyecto | Fluxa Method",
  description: "Landing de seguimiento para Jesus Rodriguez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
