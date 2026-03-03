import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Engineer Portfolio | Dummy Name",
  description:
    "Modern cloud engineer portfolio showcasing AWS, Kubernetes, Docker, CI/CD, and Terraform experience."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 bg-cloud-gradient text-slate-50">
        {children}
      </body>
    </html>
  );
}

