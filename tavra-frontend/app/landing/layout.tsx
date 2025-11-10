import Footer from "../components/Footer/Footer";
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
      <div className="sticky bottom-0 -z-10">
       <Footer />
      </div>
    </section>
  );
}
