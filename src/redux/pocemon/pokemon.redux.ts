import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { PokemonT } from './types'


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonById: builder.query<PokemonT, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const {  useGetPokemonByIdQuery } = pokemonApi