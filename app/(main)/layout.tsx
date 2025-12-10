import BodyLayout from "@/src/components/essential-components/BodyLayout";
import Footer from "@/src/components/essential-components/Footer";
import Header from "@/src/components/essential-components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <BodyLayout>{children}</BodyLayout>
      <Footer className="mt-auto" />
    </section>
  );
}
