const TableItem = ({ pokemon }) => {
    return (
        <ul className="grid grid-cols-3 text-center p-3 bg-gray-100 border-b">
            <li>{pokemon.id || '-'}</li>
            <li>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
            <li>{pokemon.types
                ? pokemon.types.map((typeObj) => typeObj.type.name.charAt(0).toUpperCase() + typeObj.type.name.slice(1)).join(", ")
                : "-"}</li>
        </ul>
    );
}

export default TableItem;