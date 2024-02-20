'use client';
import CWEBFAIcon from './CWEBFAIcon';

type doubleArrowBtnProps = {
  type: 'submit' | 'button' | 'reset';
  label: string;
};
function DoubleArrowBtn({ type, label }: doubleArrowBtnProps) {
  return (
    <button
      type={type}
      className="relative py-4 pl-11 pr-6 flex flex-row gap-3 flex-nowrap bg-rose rounded transition-all [&:hover>*]:left-0 [&:hover>#sub-btn-left-arrow-ico]:opacity-100 [&:hover>#sub-btn-right-arrow-ico]:opacity-0"
    >
      <span
        id="sub-btn-left-arrow-ico"
        className="relative -left-6 opacity-0 transition-all"
      >
        <CWEBFAIcon iconName="faArrowRight" color="white" />
      </span>
      <span
        id="sub-btn-text"
        className="text-white font-semibold relative -left-6 transition-all"
      >
        {label}
      </span>
      <span
        id="sub-btn-right-arrow-ico"
        className="relative opacity-100 transition-all -left-6"
      >
        <CWEBFAIcon iconName="faArrowRight" color="white" />
      </span>
    </button>
  );
}

export default DoubleArrowBtn;
