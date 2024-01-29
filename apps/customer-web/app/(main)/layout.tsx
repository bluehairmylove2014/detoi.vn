import Header from '@presentational/organisms/Header';
import Footer from '@presentational/organisms/Footer';
import WebMainCustomerTemplate from '@presentational/templates/WebMainCustomerTemplate';

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
