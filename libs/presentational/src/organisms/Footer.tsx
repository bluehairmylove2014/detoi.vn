import CWEBFAIcon from '@presentational/atoms/CWEBFAIcon';
import IconButtonWithHover from '@presentational/atoms/IconButtonWithHover';
import Image from 'next/image';
import Link from 'next/link';
import qrDetoi from '@assets/qrDetoi.png';

function Footer() {
  const aboutUs = [
    {
      link: '#',
      title: 'Giới thiệu',
    },
    {
      link: '#',
      title: 'Quan hệ cổ đông',
    },
    {
      link: '#',
      title: 'Tin tức & Sự kiện',
    },
    {
      link: '#',
      title: 'Tuyển dụng',
    },
    {
      link: '#',
      title: 'Thông tin ngành',
    },
  ];

  const instruction = [
    {
      link: '#',
      title: 'Báo giá hỗ trợ',
    },
    {
      link: '#',
      title: 'Câu hỏi thường gặp',
    },
    {
      link: '#',
      title: 'Về chúng tôi',
    },
    {
      link: '#',
      title: 'Tin nội bộ',
    },
    {
      link: '#',
      title: 'Liên hệ',
    },
  ];

  const policy = [
    {
      link: '#',
      title: 'Tổng đài hỗ trợ',
    },
    {
      link: '#',
      title: 'Quy chế hoạt động',
    },
    {
      link: '#',
      title: 'Điều khoản thỏa thuận',
    },
    {
      link: '#',
      title: 'Chính sách bảo mật',
    },
    {
      link: '#',
      title: 'Giải quyết khiếu nại',
    },
  ];

  const switchboard = [
    {
      icon: 'faPhone' as const,
      title: '0902987088',
    },
    {
      icon: 'faWebflow' as const,
      title: 'cskh@safeclean.vn',
    },
    {
      icon: 'faEnvelope' as const,
      title: 'info@safeclean.vn',
    },
  ];

  return (
    <div className="w-full bg-black relative grid place-items-center">
      <div className="container text-gray-400 py-[4rem] px-[2rem] grid grid-cols-5 md:text-sm sm:text-2xl">
        <div className="flex flex-col space-y-10 col-span-3 justify-center md:space-y-0 md:flex-row">
          <div className="flex-1 md:mr-2 ">
            <h4 className="text-yellow-500 mb-2 sm:text-2xl md:text-base">
              VỀ CHÚNG TÔI
            </h4>
            <ul className="space-y-2">
              {aboutUs.map((info) => (
                <li className=" hover:text-white" key={info.title}>
                  <Link href={info.link}>{info.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 md:mr-2 ">
            <h5 className="text-yellow-500 mb-2 sm:text-2xl md:text-base">
              HƯỚNG DẪN
            </h5>
            <ul className="space-y-2">
              {instruction.map((info) => (
                <li className=" hover:text-white" key={info.title}>
                  <Link href={info.link}>{info.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h5 className="text-yellow-500 mb-2 sm:text-2xl md:text-base">
              QUY ĐỊNH
            </h5>
            <ul className="space-y-2">
              {policy.map((info) => (
                <li className="hover:text-white" key={info.title}>
                  <Link href={info.link}>{info.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row col-span-2 md:justify-end">
          <div className="sm:flex-2 md:flex-1">
            <h5 className="text-yellow-500 mb-2 sm:text-2xl md:text-base">
              TỔNG ĐÀI
            </h5>
            <ul className="space-y-2">
              {switchboard.map((info) => (
                <li className="text-white" key={info.title}>
                  <CWEBFAIcon
                    iconName={info.icon}
                    color="white"
                    className="xl:h-4 xl:w-4 md:h-3 md:w-3"
                  />{' '}
                  {info.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <h5 className="text-yellow-500 mb-2 sm:text-2xl md:text-base">
                MẠNG XÃ HỘI
              </h5>
              <div className="flex justify-between px-3">
                <IconButtonWithHover type="button" shape="circle">
                  <CWEBFAIcon iconName="faFacebookF" color="black" />
                </IconButtonWithHover>
                <IconButtonWithHover type="button" shape="circle">
                  <CWEBFAIcon iconName="faInstagram" color="black" />
                </IconButtonWithHover>
                <IconButtonWithHover type="button" shape="circle">
                  <CWEBFAIcon iconName="faYoutube" color="black" />
                </IconButtonWithHover>
              </div>
              <hr className="my-3"></hr>
              <div className="flex justify-between items-center">
                <p className="text-white italic mr-1 sm:text-xl md:text-sm">
                  Quét QR để liên hệ với chúng tôi
                </p>
                <div></div>
                <div className="w-[35%] h-[35%]">
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
