import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { getSession } from "@/middleware";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phonebook",
  description: "Communicate better",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (!session) notFound();

  return (
    <div className="w-full flex h-dvh">
      <Sidebar session={session} />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
