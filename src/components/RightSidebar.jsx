import { social } from "../datas";
const RightSidebar = () => {
  return (
    <aside className="right-side-bar hidden lg:grid place-items-center">
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

export default RightSidebar;
