// https://todo-eight-blond.vercel.app/
// https://stackoverflow.com/questions/52847245/how-to-change-multiple-properties-of-a-state-in-react-at-the-same-time
// Inspiration ^^^

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import './body.css';
import axios from 'axios';
require('dotenv').config()


const URL = 'https://meme-api.herokuapp.com/gimme';
var temp_string = '';
var CURRENT_URL = 'https://meme-api.herokuapp.com/gimme/wholesomememes';
// var hangoutButton = document.getElementById("hangoutButtonId");

function Header2() {
    function getVal(val) {
        temp_string = String(val.target.value);
    }

    function assignVal() {
        CURRENT_URL = URL + '/' + temp_string;
        temp_string = '';
    }

    function resetVal() {
        CURRENT_URL = URL;
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-gray-900 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-20 w-20"
                                    src="/randomz.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div class="p-2 flex">
                                <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                    <div class=" relative ">
                                        <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-gray-400 bg-gray-800 flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Specify Subreddit r/" onChange={getVal} autocomplete="off" />
                                    </div>
                                    <div class="button-point flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit" onClick={assignVal}>
                                        Search
                                    </div>
                                    <div class="button-point flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit" onClick={resetVal}>
                                        Reset
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 py-6 space-y-1 sm:px-3">
                                <div class="px-2 py-6 flex justify-center">
                                    <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                        <div class=" relative ">
                                            <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 bg-gray-800 w-full py-2 px-4 text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search subreddit r/" onChange={getVal} autocomplete="off" />
                                        </div>
                                        <div class="text-center flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" onClick={() => { assignVal(); setIsOpen(!isOpen); }} type="submit">
                                            Search
                                        </div>
                                        <div class="text-center flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" onClick={() => { resetVal(); setIsOpen(!isOpen); }} type="submit">
                                            Reset
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

class App extends React.Component {
    state = {
        postLink: '',
        title: '',
        subreddit: '',
        url: '',
        author: '',
        redirect: ''
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        // https://meme-api.herokuapp.com/gimme
        // https://api.adviceslip.com/advice
        axios.get(CURRENT_URL)
            .then((response) => {
                // process.env.REACT_APP_REDIRECT_URL+='/SaimanSays';
                // console.log(CURRENT_URL);
                const reddit_info = response.data;
                this.setState({ title: reddit_info.title, url: reddit_info.url, author: 'u/' + reddit_info.author, subreddit: 'r/' + reddit_info.subreddit, postLink: reddit_info.postLink });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return <div>
            <Header2 />
            <div className="mt-10 font-bold grid place-items-center ">
                <div class="bg-gray-900 border border-gray-500 shadow-lg  rounded-3xl p-4 m-4 rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">

                    <h2 class="px-3 py-2 sm:text-3xl text-2xl title-font font-extrabold text-gray-200">{this.state.title}</h2>


                    <div class="px-3 text-gray-400">
                        <div class="pt-2">
                            <div class="text-indigo-500">
                                {/* <span class="font-medium mr-2">URL</span> */}
                                <span class="text-indigo-500 text-sm mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-400">
                                    <svg class="w-4 h-4 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" data-darkreader-inline-stroke="">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <a href={this.state.postLink} target="_blank" rel="noreferrer" className="text-base">
                                        {this.state.postLink}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div class="flow-root px-3 py-4">
                        <p class="float-left text-gray-400">
                            {this.state.author}
                        </p>
                        <p class="float-right text-gray-400">
                            {this.state.subreddit}
                        </p>
                    </div>

                    <img class="w-full bg-cover" src={this.state.url} alt="meme_image" />

                    <button id="hangoutButtonId" class="px-3 mt-3 w-full h-12 px-6 text-base font-semibold text-indigo-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700" onClick={this.fetchAdvice}>Generate Meme</button>
                </div>
            </div>
        </div>
    };
}

export default App;