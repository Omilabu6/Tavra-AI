// // app/(dashboard)/layout.tsx
// import Sidebar from "@/app/components/Sidebar";
// import DashboardNavbar from "@/app/components/DashboardNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1">
        {/* <DashboardNavbar /> */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
