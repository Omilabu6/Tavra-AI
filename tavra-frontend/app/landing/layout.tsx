import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section >
      <Navbar />
       {children}
      <Footer />
    </section>
  );
}
