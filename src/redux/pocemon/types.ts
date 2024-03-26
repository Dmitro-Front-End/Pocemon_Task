export interface AbilitiesT {
    ability: {
      name : string
    }
  }
export interface StatT {
  stat: {
      name : string
    },
    base_stat : number
  }
  
export interface PokemonT {
    abilities : AbilitiesT[],
    name : string,
    sprites : {
      other : {
        home : {
          front_default : string
        } 
      }
    },
    stats : StatT[]
  }