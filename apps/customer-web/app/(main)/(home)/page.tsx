import CustomButton from '@presentational/atoms/CustomButton';
import CWEBFAIcon from '@presentational/atoms/CWEBFAIcon';
import { Akshar } from 'next/font/google';
import PhoneImg from '@assets/phone-single.png';
import ArrowLeft from '@assets/arrow-left.png';
import ArrowRight from '@assets/arrow-right.png';
import Activity_1_img from '@assets/activity (1).png';
import Activity_2_img from '@assets/activity (2).png';
import Activity_3_img from '@assets/activity (3).png';
import User_1_img from '@assets/user-avt (1).png';
import User_2_img from '@assets/user-avt (2).png';
import User_3_img from '@assets/user-avt (3).png';
import User_4_img from '@assets/user-avt (4).png';
import CleaningIcon from '@assets/cleaning-110.png';
import Image from 'next/image';
import CircleImage from '@presentational/atoms/CircleImage';
import ColorfulDot from '@presentational/atoms/ColorfulDot';
import ImageIcon from '@presentational/atoms/ImageIcon';

const akshar = Akshar({
  subsets: ['latin'],
});

function Home() {
  return (
    <main className="w-full h-fit flex flex-col justify-start items-center relative">
      <section className="grid grid-cols-1 grid-rows-7 bg-white w-full h-screen container relative overflow-visible scrollbar-hide">
        <div className="col-span-1 row-span-3 text-center flex flex-col justify-end items-center mb-8">
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
        <div className="col-span-1 row-span-4 flex flex-row justify-center items-end z-10">
          <div className="w-fit h-full relative opacity-80 hidden xl:block">
            <Image
              src={ArrowLeft}
              alt="Vô vàn dịch vụ, dịch vụ dọn dẹp, dịch vụ sửa chữa"
              className="top-1/2 relative aspect-w-2 h-12 w-auto aspect-[2]"
            />
          </div>
          <div className="h-[min(100%,31rem)] w-auto relative aspect-[406/700]">
            <Image
              src={PhoneImg}
              alt="Vô vàn dịch vụ, dịch vụ dọn dẹp, dịch vụ sửa chữa"
              fill
              sizes="(max-width: 768px) 16rem, (max-width: 1200px) 18rem, 20rem"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="w-fit h-full relative opacity-80 hidden xl:block">
            <Image
              src={ArrowRight}
              alt="Vô vàn dịch vụ, dịch vụ dọn dẹp, dịch vụ sửa chữa"
              className="top-[15%] relative aspect-w-2 h-12 w-auto aspect-[2]"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-3/5 lg:h-2/3 z-20">
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-4 w-fit h-fit">
              <Image
                src={Activity_1_img}
                alt="Dịch vụ dọn dẹp nhà cửa giá rẻ"
                className="w-44 h-auto aspect-square rounded object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-0 w-fit h-fit">
              <Image
                src={Activity_3_img}
                alt="Dịch vụ vận chuyển nhà, phòng trọ"
                className="w-28 h-auto aspect-[9/13] rounded object-cover"
              />
            </div>
            <div className="p-5 bg-white rounded flex flex-col w-52 h-fit gap-3 absolute top-[35%] left-[45%] transform -translate-x-[45%] -translate-y-[35%] shadow-md">
              <div className="flex flex-row gap-2 flex-nowrap overflow-hidden w-full h-fit">
                <CircleImage src={User_4_img} alt="user1" size="1.5rem" />
                <CircleImage src={User_3_img} alt="user1" size="1.5rem" />
                <CircleImage src={User_2_img} alt="user1" size="1.5rem" />
                <CircleImage src={User_1_img} alt="user1" size="1.5rem" />
                <div className="w-6 h-6 rounded-full bg-zinc-200 grid place-items-center">
                  <span className="font-semibold text-black whitespace-nowrap text-[0.6rem]">
                    99+
                  </span>
                </div>
              </div>
              <h3>
                Hơn&nbsp;
                <b>
                  <span className="text-orange-500">
                    <u>1.000</u>
                  </span>
                </b>
                &nbsp;người dùng mỗi ngày
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-3/5 lg:h-2/3 z-20">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-4 w-fit h-fit">
              <Image
                src={Activity_2_img}
                alt="Dịch vụ sửa chữa giá rẻ"
                className="w-44 h-auto aspect-square rounded object-cover"
              />
            </div>
            <div className="bg-white rounded flex flex-col w-60 h-fit absolute top-[35%] right-[5%] transform -translate-x-[5%] -translate-y-[35%] shadow-md">
              <div className="relative w-full h-full p-8">
                <div className="flex flex-row justify-start gap-2 mb-2">
                  <ColorfulDot color="red" size="0.375rem" />
                  <ColorfulDot color="yellow" size="0.375rem" />
                  <ColorfulDot color="blue" size="0.375rem" />
                </div>
                <h3>
                  <b>
                    <span className="text-rose-600">
                      <u>Vô vàn dịch vụ</u>
                    </span>
                  </b>
                </h3>
                <p className="font-medium">
                  Dọn dẹp, sửa chữa, chuyển nhà, và hơn thế nữa ...
                </p>
                <div className="absolute -top-[1.25rem] -right-[1.25rem] transform rotate-[25deg]">
                  <ImageIcon
                    src={CleaningIcon}
                    alt="Cleaning icon"
                    size="3rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          className={`${akshar.className} text-[16rem] lg:text-[18rem] font-black absolute -bottom-44 left-1/2 transform -translate-x-1/2 text-black/10 z-0`}
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
