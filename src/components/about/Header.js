import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

function Header (){

    return(
        <section class="bg-gray-50">
            <div class="mx-auto lg:mx-12 max-w-7xl xl:pt-40 xl:pb-64 lg:pt-56 lg:pb-48 pt-24 pb-12">
                <div class="relative mx-auto lg:mx-12 max-w-full px-4 sm:static sm:px-6 lg:px-8">
                    <div class="sm:max-w-3xl">
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900 pb-4 sm:pb-16 sm:text-6xl">
                            About Us
                        </h1>

                        <p class="mt-8 sm:text-2xl/relaxed text-black">
                            Company of programmers, outstanding for the generation of creative and decisive ideas.
                        </p>
                    </div>
                </div>        
            </div>
        </section>
    )
}

export default Header