import React from 'react';
import { render } from 'react-dom';
import { Searchbar } from '../components/Searchbar';
import {Container} from 'react-bootstrap';
import {Searchresult} from '../components/Searchresults'

export default class Search extends React.Component{
    //member variables
    artistImage = document.querySelector('.artist');
    overlay = document.querySelector('.overlay');
    searchElem = document.querySelector('#search');
    constructor(props){
        super(props);
        this.state = {resultdata:[]};
        this.searchTxtValue = '';
    }
    componentDidMount(){
        //this.giveMeData();
    }
    giveMeData(search){
        const url = new URL('https://itunes.apple.com/search');
        const params = {term: search, media: 'musicVideo'};
        url.search = new URLSearchParams(params);
        /*fetch(url,{method:'POST'})
            .then(results => results.json())
            .then(data =>{
                console.log('Data is ',data);
                this.setState({resultdata:data.results});
                console.log.log('Response is Coming');
            }).catch(err=>{
                console.log('Error is  ',err);
            })*/
            const options = {
                mode: 'cors',
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                    'value': 'https://abhijeet-avee.github.io/MuiscPlayer3D/'
                },
            }
        const promise = fetch(url,options);
        promise.then(response=>{
            var p = response.json();
            p.then(data=>{
                console.log('Data is ',data);
                this.setState({resultdata:data.results});
            })
            .catch(err=>{
                console.log('Error in JSON ',err);
            })
            console.log('Response is Coming');
        }).catch(err=>{
            console.log('Error From Server');
        })
    }
    listener(event){
        let data= event.target.value;
        this.searchTxtValue = data;
        console.log('Calling by child ',this.searchTxtValue);
        if(event.key==='Enter'){
            this.giveMeData(this.searchTxtValue);
            document.querySelector('#search').blur();
        }
    }
    openMedia(url,title){
        document.querySelector('.media').innerHTML 
            = `<div className="container">
                <div className="col-xs-12">
                <video controls autoplay src="${url}"></video>
                </div>
                <div className="col-xs-12">
                <p>${title}</p>
                </div>
                </div>`
        document.querySelector('.media').classList.remove('hidden');
        document.querySelector('.artist').style.background = "url(https://i.gifer.com/origin/5e/5e1256a5a34e5f9c6e9b8942ef933de6_w200.gif)";
        console.log("I am clicked");
        this.toggleOverlay();
    }
    closeMedia(){
        document.querySelector('.media').innerHTML='';
        document.querySelector('.overlay').classList.toggle('blur');
        document.querySelectorAll('.playlist').forEach(playlist => playlist.classList.toggle('blur'));
        document.querySelector('.artist').style.background = 'none';
    }
    toggleOverlay(){
        document.querySelector('.overlay').classList.toggle('blur');
        document.querySelectorAll('.playlist').forEach(playlist => playlist.classList.toggle('blur'));
    }
    render(){
        return(
            <>
                <Container>
                <hr></hr>
                <h1 className='alert-info text-center'>{this.props.title}</h1>
                <hr></hr>
                <h6 className='alert-danger text-center'>developed by {this.props.name}</h6>
                <hr></hr>
                <div className="containerPlay">
                <Searchresult resultdata={this.state.resultdata} openMedia={this.openMedia.bind(this)}/>
                </div>
                <div className="artist"></div>
                <div className="overlay" onClick={this.closeMedia}></div>
                <Searchbar getContent={this.listener.bind(this)}/>
                <div className="media hidden"></div>
                </Container>
            </>
        )
    }
}