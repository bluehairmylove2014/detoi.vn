import CWEBFAIcon from '@presentational/next/atoms/CWEBFAIcon';
import IconButton from '@presentational/next/atoms/IconButton';
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
    <div className="w-full h-fit bg-black relative grid place-items-center">
      <div className="container mx-auto text-gray text-[1.1rem] px-12 py-16 grid grid-cols-5 md:px-0 xl:px-5 md:text-sm">
        <div className="flex flex-col space-y-10 col-span-3 justify-center md:space-y-0 md:flex-row mr-1">
          <div className="flex-1">
            <h4 className="mb-2 text-white text-xl md:text-base">
              VỀ CHÚNG TÔI
            </h4>
            <ul className="space-y-2">
              {ABOUT_US.map((info) => (
                <li key={info.title}>
                  <Link href={info.link} className="text-gray hover:text-white">
                    {info.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h5 className="mb-2 text-white text-xl md:text-base">HƯỚNG DẪN</h5>
            <ul className="space-y-2">
              {INSTRUCTION.map((info) => (
                <li key={info.title}>
                  <Link href={info.link} className="text-gray hover:text-white">
                    {info.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h5 className="mb-2 text-white text-xl md:text-base">QUY ĐỊNH</h5>
            <ul className="space-y-2">
              {POLICY.map((info) => (
                <li key={info.title}>
                  <Link href={info.link} className="text-gray hover:text-white">
                    {info.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row col-span-2 md:justify-end">
          <div className="flex-2">
            <h5 className="text-white mb-2 text-xl md:text-base">TỔNG ĐÀI</h5>
            <ul className="space-y-2">
              {SWITCH_BOARD.map((info) => (
                <li className="text-white" key={info.title}>
                  <CWEBFAIcon
                    iconName={info.icon}
                    color="white"
                    className="h-4 w-4 md:h-3 md:w-3 xl:h-4 xl:w-4"
                  />{' '}
                  {info.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 md:ml-8">
            <div className="flex flex-col">
              <h5 className="text-white mb-2 text-xl md:text-base">
                MẠNG XÃ HỘI
              </h5>
              <div className="flex justify-between px-4 pb-4 mb-4 border-b">
                <IconButton
                  iconName="faFacebookF"
                  buttonStyle="circle_modern"
                  color="black"
                />
                <IconButton
                  iconName="faInstagram"
                  buttonStyle="circle_modern"
                  color="black"
                />
                <IconButton
                  iconName="faYoutube"
                  buttonStyle="circle_modern"
                  color="black"
                />
              </div>
              <div className="flex justify-between items-start">
                <p className="text-white italic mr-2 text-lg md:mr-2 md:text-sm">
                  Quét QR để liên hệ với chúng tôi
                </p>
                <div className="md:w-20 md:h-20 w-44 h-44">
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
