import "./globals.css";
import MyMenu from "@/components/molecules/my-menu/my-menu";

export const metadata = {

  title: "TP-3 Integration",

  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {

  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MyMenu />
        {children}
      </body>
    </html>
  );
}

