import { useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <LeftSidebar />
      <RightSidebar />
      <Overlay isOpen={isSidebarOpen} />
      <Footer />
    </motion.div>
  );
};

export default Home;
