'use client';
import CWEBFAIcon from '@presentational/next/atoms/CWEBFAIcon';
import CustomButton from '@presentational/next/atoms/CustomButton';
import IconButton from '@presentational/next/atoms/IconButton';
import { toggleClass } from '@utils/helpers';
import { useRef } from 'react';

function ShortenNavSideBar() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <IconButton
        iconName="faBar"
        size="xl"
        onClick={() => toggleClass(ref.current, 'active')}
      />
      <div
        ref={ref}
        className="fixed z-40 top-0 right-0 h-full w-[min(100vw,500px)] hiddenByOpacity bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-start pt-8 transition-all"
      >
        <div className="w-full h-fit flex flex-row justify-around">
          <h3 className="whitespace-nowrap flex-grow ml-5 select-none">
            Danh mục
          </h3>
          <div className="w-fit flex-shrink">
            <CustomButton
              style="btn-white-black"
              type="button"
              onClick={() => toggleClass(ref.current, 'active')}
            >
              <CWEBFAIcon iconName="faXmarkCircle" className="text-base" />
            </CustomButton>
          </div>
        </div>
        <hr className="h-[1px] w-[calc(100%-30px)] bg-zinc text-transparent px-5 mb-8" />
        <div className="mb-4">
          <CustomButton style="btn-white-black" type="link" href="#">
            <span className="text-base">Chính sách</span>
          </CustomButton>
        </div>
        <div className="mb-4">
          <CustomButton style="btn-white-black" type="link" href="#">
            <CWEBFAIcon iconName="faCircleQuestion" className="text-base" />
            <span className="ml-2 text-base">Hỗ trợ</span>
          </CustomButton>
        </div>
      </div>
    </>
  );
}

export default ShortenNavSideBar;
