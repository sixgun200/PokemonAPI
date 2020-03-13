import React, {useState} from 'react';
import axios from 'axios';


const AxiosPokemon = () => {
    const [pokemon, setpokemon] = useState([]);

    const onClickHandler = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=20")
          .then(response => {
            // return response.json();
            return response;
        }).then(response => {
            setpokemon([...response.data.results]);
            // console.log(pokemon[0]);
            console.log(response.data.results);
        }).catch(err=>{
            console.log(err);
        });
        // console.log(pokemon);
    }

    return (
        <div className="mt-5">
            <button type="button" className="btn btn-secondary mb-4" onClick={onClickHandler}>AXIOS Pokemon</button>
                {pokemon.length ? pokemon.map((p,i) => <h6 key={i}>{i+1}{" "}{p.name}</h6>) : null}
        </div>
    );
}

export default AxiosPokemon;
