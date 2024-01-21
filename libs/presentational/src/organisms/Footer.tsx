import CWEBFAIcon from '@presentational/atoms/CWEBFAIcon';
import IconButton from '@presentational/atoms/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import qrDetoi from '@assets/qrDetoi.png';
import {
  ABOUT_US,
  INSTRUCTION,
  POLICY,
  SWITCH_BOARD,
} from '../../../constants/infoFooter';

function Footer() {
  return (
    <div className="w-full bg-black relative grid place-items-center">
      <div className="container text-gray-400 text-2xl px-16 py-16 grid grid-cols-5 md:px-0 xl:px-5 xl:text-base md:text-sm ">
        <div className="flex flex-col space-y-10 col-span-3 justify-center md:space-y-0 md:flex-row mr-1">
          <div className="flex-1">
            <h4 className="mb-2 text-white text-2xl md:text-base">
              VỀ CHÚNG TÔI
            </h4>
            <ul className="space-y-2">
              {ABOUT_US.map((info) => (
                <li className=" hover:text-white" key={info.title}>
                  <Link href={info.link}>{info.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h5 className="mb-2 text-white text-2xl md:text-base">HƯỚNG DẪN</h5>
            <ul className="xl:space-y-2 md:space-y-1">
              {INSTRUCTION.map((info) => (
                <li className=" hover:text-white" key={info.title}>
                  <Link href={info.link}>{info.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h5 className="mb-2 text-white text-2xl md:text-base">QUY ĐỊNH</h5>
            <ul className="space-y-2">
              {POLICY.map((info) => (
                <li className="hover:text-white" key={info.title}>
                  <Link href={info.link}>{info.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row col-span-2 md:justify-end">
          <div className="flex-2 md:mr-6">
            <h5 className="text-white mb-2 text-2xl md:text-base">TỔNG ĐÀI</h5>
            <ul className="space-y-2">
              {SWITCH_BOARD.map((info) => (
                <li className="text-white" key={info.title}>
                  <CWEBFAIcon
                    iconName={info.icon}
                    color="white"
                    className="md:h-2.5 md:w-2.5 xl:h-4 xl:w-4"
                  />{' '}
                  {info.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <h5 className="text-white mb-2 text-2xl md:text-base">
                MẠNG XÃ HỘI
              </h5>
              <div className="flex justify-between px-5 pb-4 mb-4 border-b">
                <IconButton
                  shape="circle"
                  iconName="faFacebookF"
                  background="whiteYellow"
                  color="black"
                />
                <IconButton
                  shape="circle"
                  iconName="faInstagram"
                  background="whiteYellow"
                  color="black"
                />
                <IconButton
                  shape="circle"
                  iconName="faYoutube"
                  background="whiteYellow"
                  color="black"
                />
              </div>
              <div className="flex justify-between items-start">
                <p className="text-white italic mr-1 xl:text-sm md:text-xs text-xl">
                  Quét QR để liên hệ với chúng tôi
                </p>
                <div className="w-28 h-28">
                  <Image src={qrDetoi} alt="qr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
