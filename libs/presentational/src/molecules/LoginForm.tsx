import AuthInput from '@presentational/atoms/AuthInput';
import CustomButton from '@presentational/atoms/CustomButton';
import ImageIcon from '@presentational/atoms/ImageIcon';
import Facebook from '@assets/facebook.png';
import Google from '@assets/google.png';
import Link from 'next/link';

function LoginForm() {
  return (
    <form className="overflow-hidden min-h-[25rem] w-3/4 flex flex-col items-center justify-start">
      <div className="font-extrabold text-[40px] mt-8 mb-5">ĐĂNG NHẬP</div>
      <AuthInput label="Email" />
      <AuthInput label="Mật khẩu" />
      <div className="w-full mt-[30px]">
        <CustomButton style="btn-secondary">Đăng nhập</CustomButton>
      </div>
      <div className="text-[0.6rem] mt-[15px] font-semibold">
        <span>Bạn là người mới? </span>
        <span className="text-secondary">
          <Link href={'/#'}>Tạo tài khoản ngay</Link>
        </span>
      </div>

      <div className="text-[0.6rem] mt-[40px] font-semibold">
        <div>Hoặc có thể đăng nhập bằng</div>
        <div className="flex flex-row justify-center gap-4 mt-[20px]">
          <div className="flex flex-col items-center">
            <ImageIcon src={Facebook} alt="facebook" size="1.5rem" />
            <div>Facebook</div>
          </div>
          <div className="flex flex-col items-center">
            <ImageIcon src={Google} alt="google" size="1.5rem" />
            <div>Google</div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
