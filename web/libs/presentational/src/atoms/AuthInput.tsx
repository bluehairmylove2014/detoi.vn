'use client';
import { Controller } from 'react-hook-form';

const inputDefinition = {
  EMAIL: {
    type: 'email',
    icon: 'fi fi-rr-envelope',
  },
  PASSWORD: {
    type: 'password',
    icon: 'fi fi-rs-key',
  },
};

export type authInputParams = {
  name: string;
  label: string;
  type: 'EMAIL' | 'PASSWORD';
  control: any;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const AuthInput = ({
  name,
  label,
  type,
  control,
  disabled,
  onChange,
}: authInputParams) => {
  return (
    <div className="relative bg-transparent rounded shadow-lg h-10 w-full mt-[30px] ">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <label className="bg-white bg-opacity-80 text-[0.65rem] absolute left-3 z-50 -translate-y-1/2 font-semibold flex flex-row items-center justify-start px-1">
              htmlFor={name}
              <span className="">{label}</span>
            </label>
            <input
              className="text-xs border border-midgray outline-none bg-transparent px-3 w-full h-full rounded-sm"
              type={inputDefinition[type].type}
              id={name}
              disabled={disabled}
              autoComplete="off"
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                field.onChange(value);
                onChange && onChange(value);
              }}
              onFocus={() => {
                // addClass(labelSpanRef.current, 'opacity-0');
              }}
              onBlur={(e) => {
                if (e.target.value.trim().length === 0) {
                  //   removeClass(labelSpanRef.current, 'opacity-0');
                }
              }}
            />
          </>
        )}
      />
    </div>
  );
};

export default AuthInput;
