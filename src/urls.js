import {API_KEY} from './Constants/constants'
export const originals =`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28` 
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`