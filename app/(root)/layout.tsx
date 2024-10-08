import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import MobileNav from "../../components/MobileNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const logggedIn = {firstName: 'joshua', lastName: 'omeonu'};


  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={logggedIn}/>
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
          src='/icons/logo.svg'
          width={30}
          height={30}
          alt="logo"
          />
          <div>
            <MobileNav user={logggedIn}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
