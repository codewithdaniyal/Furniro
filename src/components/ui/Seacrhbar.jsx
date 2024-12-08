import { FiSearch } from "react-icons/fi";

const SearchComponent = () => {
  return (
    <div className="pt-2 relative mx-auto text-gray-600 flex items-center">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none flex-grow"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="ml-2">
        <FiSearch className="text-gray-600 h-4 w-4" />
      </button>
    </div>
  );
};

export default SearchComponent;
