import { ReactNode } from "react";
import Link from "next/link";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
        <h2 className="text-xl font-bold mb-4">CRM Admin</h2>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block hover:underline">Dashboard</Link>
          <Link href="/dashboard/users" className="block hover:underline">Users</Link>
          <Link href="/dashboard/leads" className="block hover:underline">Leads</Link>
          <Link href="/dashboard/quotations" className="block hover:underline">Quotations</Link>
          <Link href="/dashboard/customers" className="block hover:underline">Customers</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <div className="text-sm text-gray-600 mb-4">Welcome</div>
        {children}
      </main>
    </div>
  );
}