import CustomButton from '@presentational/atoms/CustomButton';
import CWEBFAIcon from '@presentational/atoms/CWEBFAIcon';
import { Akshar } from 'next/font/google';
import PhoneImg from '@assets/phone-single.png';
import ArrowLeft from '@assets/arrow-left.png';
import ArrowRight from '@assets/arrow-right.png';
import Image from 'next/image';

const akshar = Akshar({
  subsets: ['latin'],
});

function Home() {
  return (
    <main className="w-full h-fit flex flex-col justify-start items-center relative">
      <section className="grid grid-cols-1 grid-rows-5 gap-4 bg-white w-full h-screen container relative overflow-visible scrollbar-hide">
        <div className="col-span-1 row-span-2 text-center flex flex-col justify-end items-center">
          <h1 className="font-black drop-shadow-md text-[3rem]">
            ĐỂ TÔI “LÀM” GIÚP BẠN
          </h1>
          <p className="max-w-lg">
            Đang cần ai đó hỗ trợ, hay đang cần tìm một công việc bán thời gian?
            Chúng tôi ở đây để thoả mãn mọi nhu cầu của bạn!
          </p>
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <div className="w-36">
              <CustomButton style="fill-black" type="link" href="#">
                <CWEBFAIcon iconName="faApple" color="white" />{' '}
                <span className="ml-1">App Store</span>
              </CustomButton>
            </div>
            <div className="w-36">
              <CustomButton style="fill-black" type="link" href="#">
                <CWEBFAIcon iconName="faGooglePlay" color="white" />{' '}
                <span className="ml-1">Google Play</span>
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-3 flex flex-row justify-center items-end z-10">
          <div className="w-fit h-full relative">
            <Image
              src={ArrowLeft}
              alt="Vô vàn dịch vụ, dịch vụ dọn dẹp, dịch vụ sửa chữa"
              width={120}
              height={30}
              style={{ top: '50%', position: 'relative' }}
            />
          </div>
          <Image
            src={PhoneImg}
            alt="Vô vàn dịch vụ, dịch vụ dọn dẹp, dịch vụ sửa chữa"
            width={290}
            height={500}
          />
          <div className="w-fit h-full relative">
            <Image
              src={ArrowRight}
              alt="Vô vàn dịch vụ, dịch vụ dọn dẹp, dịch vụ sửa chữa"
              width={120}
              height={30}
              style={{ top: '20%', position: 'relative' }}
            />
          </div>
        </div>
        <p
          className={`${akshar.className} text-[20rem] font-black absolute -bottom-44 left-1/2 transform -translate-x-1/2 text-black/10 z-0`}
        >
          DETOIVN
        </p>
      </section>
      <section className="w-full h-screen bg-black relative">
        <div className="container"></div>
      </section>
    </main>
  );
}
export default Home;
