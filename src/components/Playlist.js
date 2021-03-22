import React from 'react';
import { Container } from 'react-bootstrap';
export const Playlist = (props)=>{
    const artwork = props.artwork;
    const previewUrl = props.previewUrl;
    const track = props.track;
    return(
    <>
        <div className="playlist" onClick={()=>props.openMedia(previewUrl,track)}
        style={{backgroundImage: `url(${artwork})`}}>
        </div>
    </>
    )
}