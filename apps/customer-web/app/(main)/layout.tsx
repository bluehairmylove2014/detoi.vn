import Header from '@presentational/organisms/Header';
import Footer from '@presentational/organisms/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
