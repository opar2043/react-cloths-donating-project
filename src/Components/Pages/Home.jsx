import banner from '../../assets/village.webp'
import Carosel from '../Root/Carosel'
import About from './About'
import HowToHelp from './HowToHelp'
import Join from './Join'
import SendFund from './SendDund'
const Home = () => {
  return (
    <div>
        {/* <div className="hero min-h-screen my-10">
          <img src={banner} alt="" className='object-cover w-full'/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Rural Village Life In winter</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
</div> */}

       <Carosel></Carosel>

        <About></About>
       
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <HowToHelp></HowToHelp>
        </div>
       <Join></Join>
       <SendFund></SendFund>
    </div>
  )
}

export default Home