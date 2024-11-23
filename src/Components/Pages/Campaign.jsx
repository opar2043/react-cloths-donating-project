
import { useLoaderData } from 'react-router-dom'
import ClothData from './ClothData';

const Campaign = () => {
  const cloths = useLoaderData();

  // console.log(cloths);
  return (
    <div className='py-8'>
      <h2 className='text-lg md:text-2xl font-bold text-center'>Here are Our Donation Campaign</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        {
          cloths?.map(cloth => <ClothData cloth={cloth}></ClothData>)
        }
      </div>
    </div>
  )
}

export default Campaign