import React from 'react';
export function Searchbar(props){
    return(
        <>
         <input autoFocus autoCorrect="off" autoCapitalize="off" 
         spellCheck="false" id="search" placeholder="Artist .." text="text"
         onKeyDown={props.getContent}/>
        </>
    )
}