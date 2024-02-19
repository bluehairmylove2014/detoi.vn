import Header from '@presentational/next/organisms/Header';
import Footer from '@presentational/next/organisms/Footer';
import WebMainCustomerTemplate from '@presentational/next/templates/WebMainCustomerTemplate';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WebMainCustomerTemplate>
      <Header />
      {children}
      <Footer />
    </WebMainCustomerTemplate>
  );
}
