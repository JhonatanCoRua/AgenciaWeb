function ServicesCard ({data, index}) {
    return(
        <div 
        onMouseEnter={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-orange-500')
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.remove('text-orange-500')
        }} 
        className="w-full relative p-8 h-96 lg:h-[200pm] bg-white hover:-translate-y-1 transition duration-300 aese-in-out">
            <div className="w-full ">
            <i className='bx bx-code-block text-6xl text-gray-500'></i>
            <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
            <p className="text-lg font-mregular text-gray-500 pt-4">{data.title}</p>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
            <h2 id={index} className="items-end text-xl font-semibold text-gray-900 pt-8">Learn More</h2>
            </div>
        </div>
    )
}

export default ServicesCard