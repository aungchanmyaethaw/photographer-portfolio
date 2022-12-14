import { useEffect } from "react";
import {
  LeftSidebar,
  Navbar,
  RightSidebar,
  Overlay,
  Form,
  Footer,
} from "../components";
import { useAppContext } from "../contexts";
import { Modal } from "../components";
import { AnimatePresence, motion } from "framer-motion";

const getFirstName = () => {
  const profile = JSON.parse(localStorage.getItem("form.data"));
  const firstName = profile.name.split(" ")[0];
  return firstName;
};

const Contact = () => {
  const { setCurrentLink, isFormModalOpen, openModal, isSidebarOpen } =
    useAppContext();

  useEffect(() => {
    setCurrentLink(3);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    localStorage.setItem("form.data", JSON.stringify(formData));
    openModal();
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isFormModalOpen && <Modal firstName={getFirstName()} />}
      </AnimatePresence>

      <Navbar />

      <div className="lg:px-12 py-16 md:py-[6em] sm:mb-4 md:mb-12">
        <h1 className="text-[2.4rem] lg:text-[4.2rem] text-light font-heading font-normal mb-4 lg:mb-6 lg:leading-[4.5rem]">
          Contact Me
        </h1>
        <p className="text-light font-paragraph w-full  lg:w-2/3 mb-16 lg:ms-0 text-sm lg:text-base ">
          Let's get the conversation started.Tell us a bit of yourself, and I'll
          get in touch as soon as I can.
        </p>
        <Form handleSubmit={handleSubmit} />
      </div>

      <LeftSidebar />
      <RightSidebar />
      <Overlay isOpen={isSidebarOpen} />
      <Footer />
    </motion.section>
  );
};

export default Contact;
