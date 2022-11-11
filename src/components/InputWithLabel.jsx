import React from "react";

const InputWithLabel = ({ label, name, type, id }) => {
  return (
    <fieldset className="flex mb-6 lg:mb-12 flex-col lg:flex-row lg:items-center">
      <label
        htmlFor={id}
        className="uppercase text-light font-heading font-semibold w-20 mb-2 lg:mb-0"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full lg:w-3/4 px-2 py-2 ml-0 mb-2  lg:ml-4  bg-transparent  border-light border-[2px] focus:outline-none  focus:border-secondary font-paragraph text-light rounded-md"
        required
      />
    </fieldset>
  );
};

export default InputWithLabel;
