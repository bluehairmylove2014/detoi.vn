import { UseFormRegister } from 'react-hook-form';

type checkboxProps = {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  watcher: Boolean;
};
function Checkbox({
  id,
  label,
  name,
  register,
  watcher = false,
}: checkboxProps) {
  return (
    <div className="flex flex-row justify-start items-start flex-nowrap gap-3 ">
      <input
        type="checkbox"
        id={id}
        {...register(name)}
        checked={watcher == true}
        className="border-solid border-transparent w-6 h-6 cursor-pointer"
      />
      <label htmlFor={id} className="line-clamp-1">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
