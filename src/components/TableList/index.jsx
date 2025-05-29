import TableItem from "../TableItem";

const TableList = ({ pokemons }) => {
    return (
        <div className="w-full max-w-4xl mx-auto mt-10">
            <div className="grid grid-cols-3 items-center justify-between text-center p-3 bg-gray-400 font-bold border-b">
                <div className="">Número</div>
                <div className="">Nome</div>
                <div className="">Tipo</div>
            </div>
            {pokemons && pokemons.length > 0 ? (
                pokemons.map((pokemon) => (
                    <TableItem key={pokemon.id || pokemon.name} pokemon={pokemon} />
                ))
            ) : (
                <div>Nenhum pokémon encontrado.</div>
            )}
        </div>
    );
}

export default TableList;