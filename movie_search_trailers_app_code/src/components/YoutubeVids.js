import React from 'react'


export default function YoutubeVids(props){



    function closePanel() {
        let modal = document.getElementById("myModal");
        
    
        modal.style.display = "none";
      }


    return(
        <div class="tablecon4">
            <span class="close" onClick={closePanel}>&times;</span><br/><br/>
            <div>
            <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${props.vidlink}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h5>{props.vidtitle}</h5>
        </div>
    )
}