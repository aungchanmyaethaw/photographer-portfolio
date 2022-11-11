import { categories } from "../datas";
import { useAppContext } from "../contexts";
const Categories = () => {
  const { addCategory } = useAppContext();

  return (
    <ul className="flex gap-8 mb-8 lg:mb-0">
      {categories.map(({ id, text }) => (
        <li
          key={id}
          className="text-light font-heading font-bold cursor-pointer transition-colors duration-300 hover:text-secondary capitalize"
          onClick={() => addCategory(id)}
        >
          {text}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
