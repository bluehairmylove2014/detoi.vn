// 'use client';

import Logo from '@presentational/molecules/Logo';
import Help from '../assets/icon/help.svg';
import CWEBFAIcon from '@presentational/atoms/CWEBFAIcon';
import CustomButton from '@presentational/atoms/CustomButton';
import IconButton from '@presentational/atoms/IconButton';

function Header() {
  return (
    <div className="xl:container">
      <header>
        <nav className="bg-white px-[30px] py-[18px]">
          <div className="flex flex-wrap justify-between items-center max-w-full min-w-full">
            <Logo />
            <div className=" flex items-center justify-center md:gap-0">
              <div className="hidden md:block">
                <CustomButton style="btn-white-black">
                  <CWEBFAIcon
                    iconName="faCircleQuestion"
                    className="text-[16px]"
                  />
                  <span className="ml-1.5 text-[16px]">Hỗ trợ</span>
                </CustomButton>
              </div>
              <div className="hidden md:block ">
                <CustomButton style="btn-white-black">
                  <span className="text-[16px]">Trở thành Freelancer</span>
                </CustomButton>
              </div>
              <div className="hidden md:block ">
                <CustomButton style="btn-white-black">
                  <span className="text-[16px]">Chính sách</span>
                </CustomButton>
              </div>
              <div className="w-29">
                <CustomButton style="btn-white-black-border">
                  <span className="text-[16px] mx-1">Đăng nhập</span>
                </CustomButton>
              </div>
              <div className="md:hidden">
                <CustomButton style="btn-white-black">
                  <CWEBFAIcon iconName="faBar" className="text-2xl" />
                </CustomButton>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
