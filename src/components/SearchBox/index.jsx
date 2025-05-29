import ButtonSearch from "../ButtonSearch";
import { useState } from "react";

const SearchBox = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() !== "") {
            onSearch(search.toLowerCase());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-sm flex justify-between border border-gray-600 rounded-xl">
                <input
                    type="text"
                    placeholder="Pesquise por um pokemon pelo nome"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    autoComplete="off"
                    className="w-full rounded-xl pl-4 outline-none"
                />
                <ButtonSearch />
            </div>
        </form>
    );
}

export default SearchBox;