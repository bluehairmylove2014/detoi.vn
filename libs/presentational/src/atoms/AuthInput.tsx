'use client';
import { Controller } from 'react-hook-form';
import { useRef } from 'react';
import { addClass, removeClass } from '@utils/helpers';

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
  name?: string;
  label?: string;
  type?: 'EMAIL' | 'PASSWORD';
  control?: any;
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
      <label className="bg-white bg-opacity-80 text-[0.65rem] absolute left-3 z-50 -translate-y-1/2 font-semibold flex flex-row items-center justify-start px-1">
        <span className="">{label}</span>
      </label>
      <input className="text-xs border border-midgray outline-none bg-transparent px-3 w-full h-full rounded-sm" />
    </div>
  );
};

export default AuthInput;
