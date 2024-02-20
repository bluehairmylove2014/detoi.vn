import Checkbox from '@presentational/next/atoms/Checkbox';
import CommonInput from '@presentational/next/atoms/CommonInput';
import DoubleArrowBtn from '@presentational/next/atoms/DoubleArrowBtn';
import useFriendlyCaptcha from '@presentational/next/atoms/FriendlyCaptcha';
import { useForm } from 'react-hook-form';

type contactFormType = {
  fullName: string;
  email: string;
  topic: string;
  content: string;
  subscribeNews: boolean;
};
function ContactForm() {
  const { register, watch } = useForm<contactFormType>({
    defaultValues: {
      fullName: '',
      email: '',
      topic: '',
      content: '',
      subscribeNews: false,
    },
  });
  const onSuccessVerify = () => {
    console.log('SUCCESS');
  };
  const { CaptchaWidget } = useFriendlyCaptcha({
    onSuccessVerify: onSuccessVerify,
  });

  return (
    <form className="max-w-3xl mx-auto w-full h-fit">
      <div className="grid grid-cols-2 grid-rows-3 gap-6 w-full h-fit">
        <div className="col-span-1 row-start-1 pr-5">
          <CommonInput
            theme="clean"
            type="fullName"
            label="Họ và tên"
            id={'fullName'}
            register={register}
            inputName={'fullName'}
            watcher={watch('fullName')}
          />
        </div>
        <div className="col-span-1 row-start-1 pl-5">
          <CommonInput
            theme="clean"
            type="email"
            label="Email liên lạc"
            id={'email'}
            register={register}
            inputName={'email'}
            watcher={watch('email')}
          />
        </div>
        <div className="col-span-2 row-start-2">
          <CommonInput
            theme="clean"
            type="shortText"
            label="Chủ đề"
            id={'topic'}
            register={register}
            inputName={'topic'}
            watcher={watch('topic')}
          />
        </div>
        <div className="col-span-2 row-start-3">
          <CommonInput
            theme="clean"
            type="longText"
            label="Lời nhắn của bạn"
            id={'content'}
            register={register}
            inputName={'content'}
            watcher={watch('content')}
          />
        </div>
      </div>
      <div className="mb-2 mt-16">
        <Checkbox
          id="check-receive-news"
          name="subscribeNews"
          label="Tôi muốn nhận thư về các thông tin mới nhất của detoi.vn"
          register={register}
        />
      </div>
      <div className="w-full h-fit flex flex-row justify-start items-center gap-6">
        <DoubleArrowBtn type="submit" label="Gửi thư ngay" />
        <div>{CaptchaWidget}</div>
      </div>
    </form>
  );
}

export default ContactForm;
