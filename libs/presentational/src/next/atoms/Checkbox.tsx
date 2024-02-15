import { UseFormRegister } from 'react-hook-form';

type checkboxProps = {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
};
function Checkbox({ id, label, name, register }: checkboxProps) {
  return (
    <div className="flex flex-row justify-start items-start flex-nowrap gap-3">
      <div className="w-6 h-6 rounded border-2 border-solid border-gray">
        <input
          type="checkbox"
          id={id}
          {...register(name)}
          className="bg-transparent opacity-0 w-full h-full"
        />
      </div>
      <label htmlFor={id} className="line-clamp-1">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
