import React, {useState} from 'react';

const FetchPokemon = () => {
    const [pokemon, setpokemon] = useState([]);
    const [nexttoken, setToken] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");

    const onClickHandler = () => {
        fetch(nexttoken)
          .then(response => {
            return response.json();
        }).then(response => {
            setpokemon([...pokemon, ...response.results]);
            // console.log(pokemon[0]);
            setToken(response.next);
            // console.log(response);
        }).catch(err=>{
            console.log(err);
        });
        // console.log(pokemon);
    }

    return (
        <div className="mt-5">
            <button type="button" className="btn btn-secondary mb-4" onClick={onClickHandler}>{!pokemon.length?"Fetch Pokemon":"Get More"}</button>
                {pokemon.length ? pokemon.map((p,i) => <li key={i}>{p.name}</li>) : null}
        </div>
    );
}

export default FetchPokemon;
