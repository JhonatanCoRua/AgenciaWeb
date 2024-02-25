import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

function Header (){

    return(
        <section class="bg-gray-50">
            <div class="mx-auto lg:mx-46 max-w-7xl xl:pt-28 xl:pb-28 lg:pt-56 lg:pb-48 pt-24 pb-12 relative z-10 flex">
                <div class="mx-auto max-w-xl pl-8">
                    <div class="text-center">  
                        <h1 class="text-3xl font-semibold tracking-tight sm:text-center sm:text-5xl">
                                We are <span> </span>
                                <div className='inline-flex' style={{ color: 'red', fontWeight: 'bold'}}>    
                                    <Typewriter
                                        words={['Ideas', 'Solutions', 'Creativity', 'Development!']}
                                        loop={0}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={140}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                        // onLoopDone={handleDone}
                                        // onType={handleType}
                                    />
                                </div>
                            <strong class="font-extrabold sm:block" style={{ color: '#ff561e'}}>
                                Ingenio Génesis
                            </strong>
                        </h1>

                        <p class="mt-16 sm:text-xl/relaxed">
                        Company of programmers, outstanding for the generation of creative and decisive ideas.
                        </p>

                        <ul className='flex mt-6 gap-8 items-center justify-center py-5'>
                            <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'>
                                <Link to='/servicios/algoAqui' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'> 
                                Web Development
                                </Link>  
                            </li>
                            <li className='inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button'>
                                <Link to='/servicios/algoAqui' className='mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center'> 
                                User Experience Design
                                </Link>  
                            </li>     
                        </ul>
                    </div>    
                </div>
                <div class="mx-auto max-w-xl pr-2">
                    <div className="relative lg:-my-8">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                                <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                    <img
                                    className="object-cover lg:h-full lg:w-full"
                                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                    alt=""
                                    />
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
        </section>
        
    )
}

export default Header