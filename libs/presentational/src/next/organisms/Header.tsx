import Logo from '@presentational/next/molecules/Logo';
import CWEBFAIcon from '@presentational/next/atoms/CWEBFAIcon';
import CustomButton from '@presentational/next/atoms/CustomButton';
import ShortenNavSideBar from '@presentational/next/molecules/ShortenNavSideBar';

function Header() {
  return (
    // <header className="w-screen bg-white sticky top-0 z-30">
    <header className="w-screen bg-white">
      <div className="mx-auto xl:container xl:px-0 px-[30px] py-[18px]">
        <nav>
          <div className="flex flex-wrap justify-between items-center max-w-full min-w-full">
            <Logo />
            <div className=" flex items-center justify-center md:gap-0">
              <div className="hidden md:block">
                <CustomButton style="btn-white-black" type="link" href="#">
                  <CWEBFAIcon
                    iconName="faCircleQuestion"
                    className="text-base md:text-sm"
                  />
                  <span className="ml-2 text-base md:text-sm">Hỗ trợ</span>
                </CustomButton>
              </div>
              <div className="hidden md:block mr-6">
                <CustomButton style="btn-white-black" type="link" href="#">
                  <span className="text-base md:text-sm">Chính sách</span>
                </CustomButton>
              </div>
              <div className="w-29">
                <CustomButton
                  style="btn-black-only-border"
                  type="link"
                  href="#"
                >
                  <span className="text-base md:text-sm">
                    Trở thành Freelancer
                  </span>
                </CustomButton>
              </div>
              <div className="md:hidden ml-4">
                <ShortenNavSideBar />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
