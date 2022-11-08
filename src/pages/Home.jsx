import { useEffect } from "react";
import {
  Hero,
  RightSidebar,
  Navbar,
  LeftSidebar,
  Overlay,
  Footer,
} from "../components";
import { useAppContext } from "../contexts";
const Home = () => {
  const { setCurrentLink, isSidebarOpen } = useAppContext();

  useEffect(() => {
    setCurrentLink(0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <LeftSidebar />
      <RightSidebar />
      <Overlay isOpen={isSidebarOpen} />
      <Footer />
    </>
  );
};

export default Home;
