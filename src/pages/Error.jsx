import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="text-error text-[2.4rem] lg:text-[3.125rem] font-heading">
          PAGE NOT FOUND
        </h1>
        <h4 className="text-light text-[1.3125rem] lg:text-[1.75rem] font-heading">
          Look like this page doesn't exist.
        </h4>
        <Link
          to="/"
          className="text-paragraph text-light lg:text-[1.3125rem] underline hover:text-secondary"
        >
          Back to Home page
        </Link>
      </div>
    </section>
  );
};

export default Error;
