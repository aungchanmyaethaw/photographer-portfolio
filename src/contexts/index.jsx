import { useContext, createContext, useState, useEffect } from "react";
import { useStorage } from "../hooks";
import { categories } from "../datas";
const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState(0);
  const [currentGalleryPage, setCurrentGalleryPage] = useState(1);
  const [query, setQuery] = useStorage("", "search.query");
  const [url, setUrl] = useStorage(
    `/v1/curated?page=1&per_page=12`,
    "search.url"
  );

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

  function prevGalleryPage() {
    setCurrentGalleryPage((prev) => prev - 1);
  }

  function nextGalleryPage() {
    setCurrentGalleryPage((prev) => prev + 1);
  }

  useEffect(() => {
    handleURL();
  }, [currentGalleryPage]);

  function handleURL() {
    if (query === "all" || query === "") {
      setUrl(`/v1/curated?page=${currentGalleryPage}&per_page=12`);
    } else {
      setUrl(
        `/v1/search?query=${query}&per_page=12&page=${currentGalleryPage}`
      );
    }
  }

  function addCategory(id) {
    const currentCategory = categories.find((category) => category.id === id);
    setQuery(currentCategory.text);
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
        currentGalleryPage,
        setCurrentGalleryPage,
        prevGalleryPage,
        nextGalleryPage,
        addCategory,
        handleURL,
        setQuery,
        query,
        url,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
