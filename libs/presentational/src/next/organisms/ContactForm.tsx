'use client';

import Checkbox from '@presentational/next/atoms/Checkbox';
import CommonInput from '@presentational/next/atoms/CommonInput';
import DoubleArrowBtn from '@presentational/next/atoms/DoubleArrowBtn';
import useFriendlyCaptcha from '@presentational/next/atoms/FriendlyCaptcha';
import { Text } from '@presentational/next/atoms';
import { Resolver, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNotification } from '@presentational/next/atoms/Notification';
import React from 'react';
import { useYupValidationResolver } from '@utils/validators/yup/resolvers';
import { contactSchema } from '@utils/validators/yup';

type contactFormType = {
  fullName: string;
  email: string;
  topic: string;
  content: string;
  subscribeNews: boolean;
};
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<contactFormType>({
    resolver: useYupValidationResolver(contactSchema) as any,
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

  const { showSuccess, showError } = useNotification();
  const onSubmit = (data: contactFormType) => {
    showSuccess('Gửi thành công');
  };
  return (
    <form
      className="max-w-3xl mx-auto w-full h-fit "
      onSubmit={handleSubmit(onSubmit)}
    >
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
