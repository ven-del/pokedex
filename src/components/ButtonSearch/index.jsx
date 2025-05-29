import { IoMdSearch } from "react-icons/io";

const ButtonSearch = () => {
    return ( 
        <button type="submit" className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-full transition-colors">
            <IoMdSearch className="text-xl" />
        </button>
    );
}
 
export default ButtonSearch;