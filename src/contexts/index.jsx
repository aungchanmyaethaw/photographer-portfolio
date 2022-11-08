import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState(0);

  function openScrollLock() {
    document.body.style.maxHeight = "100vh";
    document.body.style.overflowY = "hidden";
  }

  function closeScrollLock() {
    document.body.style.maxHeight = "";
    document.body.style.overflow = "";
  }

  function openSidebar() {
    setIsSidebarOpen(true);
    openScrollLock();
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
    closeScrollLock();
  }

  function openModal() {
    setIsFormModalOpen(true);
    openScrollLock();
  }

  function closeModal() {
    setIsFormModalOpen(false);
    closeScrollLock();
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        currentLink,
        isFormModalOpen,
        openSidebar,
        closeSidebar,
        setCurrentLink,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
