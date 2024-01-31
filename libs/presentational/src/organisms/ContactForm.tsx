'use client';

import Checkbox from '@presentational/atoms/Checkbox';
import CommonInput from '@presentational/atoms/CommonInput';
import DoubleArrowBtn from '@presentational/atoms/DoubleArrowBtn';
import useFriendlyCaptcha from '@presentational/atoms/FriendlyCaptcha';
import { Text } from '@presentational/atoms';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type contactFormType = {
  fullName: string;
  email: string;
  topic: string;
  content: string;
  subscribeNews: boolean;
};
function ContactForm() {
  const [ isFormError, setIsFormError ] = useState<Boolean>(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!watch('fullName') || !watch('email') || !watch('topic') || !watch('content')) {
      setIsFormError(true);
      return;
    }
    setIsFormError(false);
    alert('Submit success');
  };
  return (
    <form className="max-w-3xl mx-auto w-full h-fit " onSubmit={handleSubmit}>
      <div className={`${isFormError? '':'invisible'}`}>
        <Text align="left" style="text-rose font-bold" size="xl">
          Vui lòng nhập đầy đủ thông tin
        </Text>
      </div>
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
          watcher={watch('subscribeNews')}
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
