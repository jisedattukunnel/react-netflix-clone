import React, { useState, useEffect } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import { imageUrl, API_KEY} from '../../Constants/constants'
import axios from '../../axios' 
// import {action, originals} from '../../urls'


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((res)=>{
            console.log(res.data.results);
            setMovies(res.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const handleMovie = (id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data);
            if(res.data.results.length!==0){
                seturlId(res.data.results[0])
            }else{
                console.log('Array length is zero !!!');
            }
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
            <div className="scrollButtonLeft">
                <i class="fas fa-chevron-left"></i>
            </div>
                {
                    
                    movies.map((obj)=>
                        <img onClick={()=>handleMovie(obj.id)} alt="Poster" className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`}/>
                        )
                } 
                <div className="scrollButtonRight">
                {/* <i class='fas fa-arrow-alt-circle-left'></i> */}
                <i class="fas fa-chevron-right"></i>
            </div>
            </div>
            
                {urlId && <Youtube videoId={urlId.key} opts={opts}/> }
        </div>
    )
}


export default RowPost