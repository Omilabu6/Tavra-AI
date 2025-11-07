
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "2rem" }}>
      {children}
    </section>
  );
}
