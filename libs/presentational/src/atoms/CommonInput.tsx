import { useRef } from 'react';
import { UseFormRegister } from 'react-hook-form';

const inputTypePropsMapping = {
  fullName: 'text',
  email: 'email',
  shortText: 'text',
  longText: 'text',
};

type commonInputProps = {
  theme: 'clean';
  type: 'fullName' | 'email' | 'shortText' | 'longText';
  label: string;
  id: string;
  register: UseFormRegister<any>;
  inputName: string;
  watcher: string;
};
function CommonInput({
  theme,
  type,
  label,
  id,
  register,
  inputName,
  watcher,
}: commonInputProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleInputFocus = () => {
    if (divRef.current) {
      divRef.current.style.borderBottomColor = 'red';
    }
  };

  const handleInputBlur = () => {
    if (divRef.current) {
      divRef.current.style.borderBottomColor = 'gray';
    }
  };
  return (
    <div
      className="relative border-b-2 border-solid bg-transparent w-full h-12 focus:!border-b-stone"
      ref={divRef}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    >
      <label
        htmlFor={id}
        className={`absolute top-1/2 transform -translate-y-1/2 left-0 font-semibold text-gray focus:!text-stone z-10 ${
          watcher?.trim().length > 0
            ? 'opacity-0 invisible'
            : 'opacity-100 visible'
        } transition-all pointer-events-none`}
      >
        {label}
      </label>
      <input
        id={id}
        className='outline-none border-none w-full h-full relative bg-transparent z-0'
        type={inputTypePropsMapping[type]}
        {...register(inputName)}
      />
    </div>
  );
}

export default CommonInput;
