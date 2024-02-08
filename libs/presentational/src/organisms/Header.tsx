import Logo from '@presentational/molecules/Logo';
import CWEBFAIcon from '@presentational/atoms/CWEBFAIcon';
import CustomButton from '@presentational/atoms/CustomButton';
import IconButton from '@presentational/atoms/IconButton';

function Header() {
  return (
    // <header className="w-screen bg-white sticky top-0 z-30">
    <header className="w-screen bg-white  fixed top-0 z-30 shadow-md">
      <div className="mx-auto xl:container xl:px-0 px-[30px] py-[18px]">
        <nav>
          <div className="flex flex-wrap justify-between items-center max-w-full min-w-full">
            <Logo />
            <div className=" flex items-center justify-center md:gap-0">
              <div className="hidden md:block">
                <CustomButton style="btn-white-black" type="link" href="#">
                  <CWEBFAIcon
                    iconName="faCircleQuestion"
                    className="text-[16px]"
                  />
                  <span className="ml-1 text-[16px]">Hỗ trợ</span>
                </CustomButton>
              </div>
              <div className="hidden md:block ">
                <CustomButton style="btn-white-black" type="link" href="#">
                  <span className="text-[16px]">Trở thành Freelancer</span>
                </CustomButton>
              </div>
              <div className="hidden md:block ">
                <CustomButton style="btn-white-black" type="link" href="#">
                  <span className="text-[16px]">Chính sách</span>
                </CustomButton>
              </div>
              <div className="w-29">
                <CustomButton
                  style="btn-black-only-border"
                  type="link"
                  href="#"
                >
                  <span className="text-[16px]">Đăng nhập</span>
                </CustomButton>
              </div>
              <div className="md:hidden">
                <IconButton iconName="faBar" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
