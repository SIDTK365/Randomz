import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div>
            <footer class="relative bg-dark pt-8 pb-6">
                <div class="container mx-auto px-4">
                    <hr class="my-6 border-gray-600" />
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div class="text-sm text-gray-400 font-semibold py-1">
                                Made with <span className="px-0.5"> ❤️ </span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank" /> by
                                <a href="https://sid-pm.herokuapp.com/" class="text-gray-300 hover:text-white"> Siddharth Singh</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
