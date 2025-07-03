import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({
  children,
  bgColor = "bg-white",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <div className={`min-h-screen ${bgColor}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
} 