import { Montserrat } from 'next/font/google';
import { BusinessLogicProvider } from '@business-layer/business-logic/provider';
import Notification from '@presentational/next/atoms/Notification';
import { ACTIVE_MODULES_LIST } from '../constants/modules';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
// import '@presentational/next/styles/global.scss';
const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Detoi Việt Nam',
  description:
    'Tìm kiếm, đặt lịch và trải nghiệm các dịch vụ từ dọn dẹp, sửa chữa, đi chợ, chuyển nhà, vệ sinh máy lạnh và hơn thế nữa. Tận hưởng trải nghiệm thuận tiện với ứng dụng Detoi Việt Nam.',
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head> */}
      {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      {/* </Head> */}
      <BusinessLogicProvider activeModules={ACTIVE_MODULES_LIST}>
        <Notification />
        <FAProvider appType="web">
          <body className={montserrat.className}>{children}</body>
        </FAProvider>
      </BusinessLogicProvider>
    </html>
  );
}
