import React from 'react';
import { Container } from 'react-bootstrap';
import { Playlist } from './Playlist';
export function Searchresult(props){
    return(
        <>
         {props.resultdata.map(ele=><Playlist key={ele.trackId} artwork={ele.artworkUrl100} previewUrl={ele.previewUrl} 
          track={ele.trackCensoredName} openMedia={props.openMedia}/>) }
        </>
    )
}
