import * as React from "react";

interface ButtonProp {
  title: string;
  id: string;
  rightIcon?: React.JSX.Element;
  leftIcon?: React.JSX.Element;
  containerClass: string;
}

export const Button: React.FC<ButtonProp> = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass} `}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};
