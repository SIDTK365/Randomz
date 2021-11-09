// https://todo-eight-blond.vercel.app/
// https://stackoverflow.com/questions/52847245/how-to-change-multiple-properties-of-a-state-in-react-at-the-same-time
// Inspiration ^^^

import React from 'react';
import './body.css';
import axios from 'axios';
require('dotenv').config()
// import Component from './component';

// var URL = 'https://meme-api.herokuapp.com/gimme';
var URL = process.env.REACT_APP_REDIRECT_URL;

class App extends React.Component {
    state = {
        postLink: '',
        title: '',
        subreddit: '',
        url: '',
        author: '',
        redirect: '/'
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        // https://meme-api.herokuapp.com/gimme
        // https://api.adviceslip.com/advice
        axios.get(URL)
            .then((response) => {
                // process.env.REACT_APP_REDIRECT_URL+='/SaimanSays';
                console.log(process.env.REACT_APP_REDIRECT_URL);
                const reddit_info = response.data;
                this.setState({ title: reddit_info.title, url: reddit_info.url, author: 'u/' + reddit_info.author, subreddit: 'r/' + reddit_info.subreddit, postLink: reddit_info.postLink });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return <div>
            <div className="grid place-items-center ">
                <div class="bg-gray-900 border border-gray-500 shadow-lg  rounded-3xl p-4 m-4 rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">

                    <h2 class="px-3 my-2 sm:text-3xl text-2xl title-font font-medium text-gray-200">{this.state.title}</h2>
                    
                    
                    <div class="px-3 mt-3 text-gray-400">
                        <div class="mb-1 pt-2">
                            <div class="mb-2 text-indigo-500">
                                {/* <span class="font-medium mr-2">URL</span> */}
                                <span class="text-indigo-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" data-darkreader-inline-stroke="">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <a href={this.state.postLink} target="_blank" rel="noreferrer">
                                        {this.state.postLink}
                                    </a>
                                </span>

                                {/* <a href={this.state.postLink} target="_blank" rel="noreferrer">
                                    {this.state.postLink}
                                </a> */}
                            </div>
                        </div>
                    </div>


                    <div class="flow-root px-3 py-3 mb-2">
                        <p class="float-left text-gray-400">
                            {this.state.author}
                        </p>

                        <p class="float-right text-gray-400">
                            {this.state.subreddit}
                        </p>
                    </div>

                    <img class="w-full bg-cover" src={this.state.url} alt="meme_image" />

                    <button class="px-3 mt-3 w-full h-12 px-6 text-base font-semibold text-indigo-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700" onClick={this.fetchAdvice}>Generate Meme</button>
                </div>
            </div>
        </div>
    };
}

export default App;
/* {this.state.url} */