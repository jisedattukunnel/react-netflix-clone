import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY, imageUrl} from '../../Constants/constants'
import axios from '../../axios' 

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data.results[0]);
            let num = Math.floor(Math.random() * 19);
            console.log(num);
            setMovie(res.data.results[num])
        })
    }, [])
        

    return (
        <div>
            <div class="col-md-12 col-md-6 col-md-4 "
            style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
                className="banner">
                <div className="content"> 
                    <h1 className="title">{movie ? movie.title : ""}</h1>
                    <div className="banner_buttons">
                        <button className="button">Play</button>
                        <button className="button">My List</button>
                    </div>
                    <h1 className="description">{movie ? movie.overview : ""}</h1>
                </div>
                <div className="fade"></div>
            </div>
        </div>
    )
}

export default Banner








