import { useAppContext } from "../contexts";
const SearchForm = () => {
  const { query, setQuery, handleURL, setCurrentGalleryPage } = useAppContext();

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentGalleryPage(1);
    handleURL();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex items-center">
        <input
          type="text"
          className="px-2 py-[5px] w-[15rem] lg:w-[18rem] bg-transparent  border-light border focus:outline-none  focus:border-secondary font-paragraph text-light rounded-l-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="my-btn btn_small" type="submit">
          Search
        </button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
