import React from 'react'
// import youtube from './youtube.js'
// import axios from "axios";
import {useEffect,useState} from 'react';
import YoutubeVids from './YoutubeVids';
import './componentstyle.css'



export default function MovieList(props){


    const[vid,setVid] = useState('');
    const[newtitle,setTitle] = useState('');
    
   
   
    async function movieTrailer(title){

        const KEY = "AIzaSyCmW7DPrLXizwU9D6BXXLRXV1V_nY6IJ-I";


        const url = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&maxResults=1&q=${title}+trailer`;
      const response2 = await fetch (url);
      const responseJson2 = await response2.json();
    //   console.log(responseJson2.items);
    
     setVid(responseJson2.items[0].id.videoId)
    setTitle(title)

     let paybox = document.querySelector(".tablediv");

      paybox.style.display = "block";



}

let modal = document.getElementById("myModal");

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
    


    return(
        <>
        {props.moviedata.map((movie,index) => {
            return (
              <>
                
                
                <div style={{width:'20%',padding:'6px'}} className='image-container d-flex justify-content-start firstBox'>
                {/* <h1>{index + 1}</h1> */}
                {/* <h5>{movie.Title}</h5> */}
               
                <img  style={{ width:'100%'}} src={movie.Poster} alt='no movie found'/>
                <div className='overlay  '>
               
                <p style={{color:'white'}}>{movie.Title}</p>
               <button 
               className='btn btn-info'

               onClick={()=>{
                   movieTrailer(movie.Title)
               }}>Watch trailer</button>
               
                </div>
                </div>


                </>
               
            )
        })}

        
      

        <div id="myModal" class="modal tablediv" style={{display: 'none'}} >
                      <YoutubeVids 
                      // id = {user._id} email = {user.email}
                      vidlink = {vid}
                      vidtitle = {newtitle}
                      />
       </div>
        

        </>
    )
}