
import banner from '../../assets/village.webp'
import banner1 from '../../assets/winter.jpg'
import banner3 from '../../assets/deshivillage.jpeg'



const Carosel = () => {
  return (
          <div>
      <div className="carousel w-full md:h-[650px] overflow-hidden">
  <div id="item1" className="carousel-item w-full">
  <div className="hero min-h-screen my-10">
 <img src={banner} alt="" className='object-cover w-full'/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md -mt-28">
      <h1 className="mb-5 text-4xl font-bold">Rural Village Life In winter</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
 </div>
  </div>
  <div id="item2" className="carousel-item w-full">
  <div className="hero min-h-screen my-10">
          <img src={banner1} alt="" className='object-cover w-full'/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Rural Village Life In winter</h1>
      
    </div>
  </div>
 </div>
  </div>
  <div id="item3" className="carousel-item w-full">
  <div className="hero min-h-screen my-10">
          <img src={banner3} alt="" className='object-cover w-full'/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Rural Village Life In winter</h1>
      
    </div>
  </div>
 </div>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
</div>
          </div>

  )
}

export default Carosel