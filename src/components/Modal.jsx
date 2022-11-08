import { motion } from "framer-motion";
import Overlay from "./Overlay";
import { useAppContext } from "../contexts";
const dropIn = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 250,
    },
  },
  exit: {
    y: "-50vh",
    opacity: 0,
  },
};

const Modal = ({ firstName }) => {
  const { closeModal } = useAppContext();

  return (
    <Overlay isOpen>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal"
      >
        <h4 className="text-secondary text-[1.75rem] font-heading mb-4">
          Thank You! {firstName}
        </h4>
        <p className="text-primary font-medium font-paragraph mb-4">
          I will reply as soon as possible.
        </p>
        <button onClick={closeModal} className="my-btn btn_alternate">
          Close
        </button>
      </motion.div>
    </Overlay>
  );
};

export default Modal;
