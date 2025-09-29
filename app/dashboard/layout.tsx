import SideNav from '@/app/ui/dashboard/sidenav';
// any components imported into this file will be part of the layout
export default function Layout({ children }: { children: React.ReactNode }) { //the pages inside /dashboard will automatically be nested inside a <Layout />
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}