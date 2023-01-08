// There is actually no reason that this should be a store
// It was much better in fact if it were a composable
// However, the initial idea was to store the API responses in the app itself instead of the session storage

import { defineStore } from "pinia";
import axios from "axios";

type TrendingMediaTypes = "tv" | "movie"
type TrendingTimeFrame = "day" | "week"

export const useMovieDB = defineStore('movieDB', () => {
    /*
        Aims to return a list of trending movies/shows of the day/week depending on the parameters provided.
            To reduce amount of API calls and improve speed, the results are cached in the user's session storage
    */
    async function fetchTrending(mediaType: TrendingMediaTypes, timeFrame: TrendingTimeFrame){
        // Gives the fetch an id based on its parameters
        // This is for storing the result in the session storage
        let fetchId = `homepage_tmbd-${mediaType}-${timeFrame}`

        const storedResult = sessionStorage.getItem(fetchId)
        // Returns cached result if found
        if (storedResult != null) {
            return JSON.parse(storedResult)
        }

        let requestUrl = `https://api.themoviedb.org/3/trending/${mediaType}/${timeFrame}?api_key=`
        
        return axios.get(`${requestUrl}${import.meta.env.VITE_TMBD_KEY}`)
            .then((res) => {
                return res.data
            }).then((res) => {
                // Saves result in cache to reduce future load times
                sessionStorage.setItem(fetchId, JSON.stringify(res.results))
                return res.results
            })
    }

    return { fetchTrending }
})