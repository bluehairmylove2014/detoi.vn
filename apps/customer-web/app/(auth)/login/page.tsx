import Image from 'next/image';
import phone from '@assets/phone.svg';
import CustomButton from '@presentational/atoms/CustomButton';
import CWEBFAIcon from '@presentational/atoms/CWEBFAIcon';
import AuthInput from '@presentational/atoms/AuthInput';

function Login() {
  return (
    <div className="bg-fgpwd-otp bg-center bg-cover bg-no-repeat brightness-55 w-screen h-screen">
      <div className="container flex flex-row w-full h-full gap-24">
        <div className="flex flex-col justify-center">
          <div className="text-white text-[3rem] font-bold drop-shadow ml-12">
            ĐỂ CHÚNG TÔI
          </div>
          <div className="ml-16 flex flex-row">
            <div className="mt-4">
              <Image src={phone} alt="phone" />
            </div>
            <div className="flex flex-col gap-0">
              <div className="text-white text-[5rem] font-black drop-shadow">
                “LÀM”{' '}
              </div>
              <div className="text-white text-[3rem] font-bold drop-shadow ml-[8rem]">
                GIÚP BẠN
              </div>
            </div>
          </div>
          <div className="w-full pl-20">
            <div className="bg-white w-full h-[0.15rem]"></div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center mt-8 ml-8">
            <div className="w-36">
              <CustomButton style="btn-black" type="link" href="#">
                <CWEBFAIcon iconName="faApple" color="white" />{' '}
                <span className="ml-1">App Store</span>
              </CustomButton>
            </div>
            <div className="w-36">
              <CustomButton style="btn-black" type="link" href="#">
                <CWEBFAIcon iconName="faGooglePlay" color="white" />{' '}
                <span className="ml-1">Google Play</span>
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white w-[517px] h-[700px] bg-opacity-95 rounded-[1.5rem]">
            <AuthInput label="Email" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
