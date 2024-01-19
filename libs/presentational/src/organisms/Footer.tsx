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
      link: '#',
      title: 'CSKH: 0902987088',
    },
    {
      link: '#',
      title: 'CSKH: cskh@safeclean.vn',
    },
    {
      link: '#',
      title: 'Email: info@safeclean.vn',
    },
  ];

  return (
    <div className="w-full bg-black relative grid place-items-center">
      <div className="container text-gray-400 text-sm flex flex-row justify-center items-start py-[4rem] px-[3rem]">
        <div className="flex-1">
          <h5 className="text-yellow-500">VỀ CHÚNG TÔI</h5>
          <ul>
            {aboutUs.map((info) => (
              <li className="mt-2 hover:text-white" key={info.title}>
                <Link href={info.link}>{info.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h5 className="text-yellow-500">HƯỚNG DẪN</h5>
          <ul>
            {instruction.map((info) => (
              <li className="mt-2 hover:text-white" key={info.title}>
                <Link href={info.link}>{info.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h5 className="text-yellow-500">QUY ĐỊNH</h5>
          <ul>
            {policy.map((info) => (
              <li className="mt-2 hover:text-white" key={info.title}>
                <Link href={info.link}>{info.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h5 className="text-yellow-500">TỔNG ĐÀI HỖ TRỢ</h5>
          <ul>
            {switchboard.map((info) => (
              <li className="mt-2 text-white" key={info.title}>
                <Link href={info.link}>{info.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h5 className="text-yellow-500">MẠNG XÃ HỘI</h5>
          <div className="flex justify-between mt-2 px-3">
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
          <hr className="my-2"></hr>
          <div className="flex items-center">
            <p className="text-white text-sm mr-2">Liên hệ chúng tôi</p>
            <Image src={qrDetoi} alt="" width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
