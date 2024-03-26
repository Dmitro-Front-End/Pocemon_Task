import React, { memo, useCallback, useState } from "react"
import { useGetPokemonByIdQuery } from "../../redux/pocemon/pokemon.redux"

import './style.css'
import { AbilitiesT, StatT } from "../../redux/pocemon/types"
import { t } from "i18next"

interface FC_PokemonT {
  id: number
}





const Pokemon: React.FC<FC_PokemonT> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  const changeOpen = useCallback(() => setIsOpen(is => !is) ,[])

  if (isLoading) return <div className="pokemon-g">
    <div className="pokemon-loading-c">
      <p>Loading...</p>
    </div>
  </div>

  if(!data) return null;

  const {name, sprites, abilities, stats} = data;
  const image = sprites.other.home.front_default;

  const pokemon_abilities = abilities.map(({ability} : AbilitiesT) => <p key={ability.name}>{t(ability.name)}</p>)
  const pokemon_stats = stats.slice(0,4).map(({stat, base_stat} : StatT) => <p key={stat.name}>{stat.name} - {base_stat}</p>)

  return (
    <div className="pokemon-g">
      <div className="pokemon-c">
        <div className="pokemon-c-left">
          <h1 onClick={changeOpen}>{name}</h1>
        </div>
        { isOpen && <div className="pokemon-c-right">

          <div className="pokemon-c-left-ability">
            <h2>stats</h2>
            {pokemon_stats}
          </div>
          <div className="pokemon-c-left-ability">
            <h2>Abilities</h2>
            {pokemon_abilities}
          </div>
          <img src={image} alt="photo" className="pokemon-image"/>
        </div>
      }

      </div>

    </div>
  )
}

export default memo(Pokemon)