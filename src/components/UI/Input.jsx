import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-3">
      <label
        className="font-semibold text-[13px] mr-2"
        htmlFor={props.input.id}
      >
        {props.label}
      </label>
      <input
       ref={ref}
        className="rounded-md w-[3rem] pl-2 border-[1px] border-black"
        {...props.input}
      />
    </div>
  );
});

export default Input;
