import { UseFormRegister } from 'react-hook-form';

const inputTypePropsMapping = {
  fullName: 'text',
  email: 'email',
  shortText: 'text',
  longText: 'text',
};
const styleThemeMapping = {
  clean: {
    div: 'relative border-b-2 border-solid border-b-gray bg-transparent w-full h-12 focus:!border-b-stone',
    label:
      'absolute top-1/2 transform -translate-y-1/2 left-0 font-semibold text-gray focus:!text-stone z-10',
    input: 'outline-none border-none w-full h-full relative bg-transparent z-0',
  },
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
  return (
    <div className={styleThemeMapping[theme].div}>
      <label
        htmlFor={id}
        className={`${styleThemeMapping[theme].label} ${
          watcher?.trim().length > 0
            ? 'opacity-0 invisible'
            : 'opacity-100 visible'
        } transition-all pointer-events-none`}
      >
        {label}
      </label>
      <input
        id={id}
        className={styleThemeMapping[theme].input}
        type={inputTypePropsMapping[type]}
        {...register(inputName)}
      />
    </div>
  );
}

export default CommonInput;
