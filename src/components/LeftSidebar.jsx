import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, social } from "../datas";
import { useAppContext } from "../contexts";
const LeftSidebar = () => {
  const { isSidebarOpen, closeSidebar, currentLink } = useAppContext();

  return (
    <aside
      className={`left-side-bar ${
        isSidebarOpen ? "open" : null
      } flex flex-col justify-between`}
    >
      <div>
        <div className="flex justify-end">
          <button className="close-sidebar-btn" onClick={closeSidebar}>
            <FaArrowLeft />
          </button>
        </div>

        <div className="mb-4">
          <h5 className="text-heading text-primary text-[1.3125rem] font-bold">
            Thomas Brook's
            <br /> <span className="text-secondary">Photography</span>
          </h5>
        </div>

        <ul className="links">
          {links.map(({ id, url, text, icon }, index) => (
            <li key={id} className={index === currentLink ? "active-link" : ""}>
              <Link to={url} onClick={closeSidebar}>
                <span className="text-[1.3125rem] text-secondary">{icon}</span>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="social-icon-wrapper">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
