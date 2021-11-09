import React from 'react'

export default function header() {
    return (
        <div>
            <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
                <div class="max-w-7xl mx-auto px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class=" flex items-center">
                            <a class="flex-shrink-0" href="/">
                                <img class="h-20 w-20" src="/randomz.svg" alt="Randomz" />
                            </a>
                            {/* <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">
                                    <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                        Home
                                    </a>
                                    <a class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                        Gallery
                                    </a>
                                    <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                        Content
                                    </a>
                                    <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                        Contact
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <div class="block">
                            <div class="md:block -mr-2 flex">
                                <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                    <div class=" relative ">
                                        <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search subreddit r/" />
                                    </div>
                                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                            <div class="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Home
                        </a>
                        <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Gallery
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Content
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Contact
                        </a>
                    </div>
                    <div class="p-2 flex">
                        <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div class=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search subreddit r/" />
                            </div>
                            <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


// {/* <div>
//             <header class="text-gray-600 body-font">
//                 <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//                             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                         </svg>
//                         <span class="ml-3 text-xl">Tailblocks</span>
//                     </a>
//                     <div class=" bg-gray-200">
//                         <div class="container">
//                             <div class="relative">
//                                 <div class="absolute top-4 left-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..."/>
//                                 <div class ="absolute top-2 right-2"> <button class ="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </div> */}