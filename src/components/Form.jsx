import { FaPaperPlane } from "react-icons/fa";
import { InputWithLabel } from "../components";
const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputWithLabel label="name:" name="name" type="text" id="name" />
      <InputWithLabel label="email:" name="email" type="email" id="email" />
      <InputWithLabel label="phone:" name="phone" type="tel" id="phone" />
      <fieldset className="flex mb-6  flex-col lg:flex-row lg:items-center ">
        <label
          htmlFor="message"
          className="uppercase text-light font-heading font-semibold w-20 self-start mb-2 lg:mb-0"
        >
          message:
        </label>
        <textarea
          name="message"
          id="message"
          rows="7"
          className="w-full lg:w-3/4 px-2 py-2 ml-0 mb-2  lg:ml-4 bg-transparent  border-light border-[2px] focus:outline-none  focus:border-secondary font-paragraph text-light rounded-md resize-none"
          required
        ></textarea>
      </fieldset>
      <div className="flex justify-center lg:justify-start  ml-0 lg:ml-24 submit-btn-wrapper">
        <button type="submit" className="my-btn flex items-center">
          Send
          <span className="ml-2">
            <FaPaperPlane />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
