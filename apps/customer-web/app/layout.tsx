import './global.scss';
import { Montserrat } from 'next/font/google';
import { BusinessLogicProvider } from '@business-layer/business-logic/provider';
import Notification from '@presentational/atoms/Notification';
import { ACTIVE_MODULES_LIST } from '../constants/modules';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Welcome to customer-web',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <BusinessLogicProvider activeModules={ACTIVE_MODULES_LIST}>
        <Notification />
        <body className={montserrat.className}>{children}</body>
      </BusinessLogicProvider>
    </html>
  );
}
