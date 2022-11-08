import { useState, useEffect } from "react";
import { useAppContext } from "../contexts";
const Overlay = ({ children, isOpen }) => {
  const [overlayOpen, setOverlayOpen] = useState(isOpen);
  const { closeSidebar, closeModal } = useAppContext();
  function handleClose() {
    setOverlayOpen(false);
    closeModal();
    closeSidebar();
  }

  useEffect(() => setOverlayOpen(isOpen), [isOpen]);

  return (
    <div
      className={`overlay ${overlayOpen ? "open" : null}`}
      onClick={handleClose}
    >
      {children}
    </div>
  );
};

export default Overlay;
