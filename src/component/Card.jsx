

import Loading from './Loading';

import ErrorUI from './ErrorUI';
import useFetch from './useFetch';

const Card = () => {
const { data, IsLoading , Err} = useFetch("https://api.escuelajs.co/api/v1/products");

  if (IsLoading === true) {
    return  <Loading /> 
   
  }
 if (IsLoading === false && Err !== null) {
      return <ErrorUI error={Err} /> 
    
    }
  return (
    <div>

      <div className='bg-gray-600 h-full  text-white text-6xl text-center font-medium pt-4'>Photo
        <div className=' bg-gray-800  container mx-auto grid grid-cols-4 gap-6 p-2 border-2 border-amber-700 mt-4 justify-between '>

          { data.map((items) => (

            <div className='h-80 bg-amber-200' key={items.id}>
              <div className=' h-60 w-60 bg-amber-950 mx-auto rounded-md  overflow-hidden shadow-xl/40 shadow-black' >
                <img className='  text-3xl  object-fill  ' src={items.images} alt="600x600" />

              </div>

              <p className='text-black text-2xl pt-6 '>$<span>{items.price}</span>.00 </p>
            </div>

          ))}


        </div>
      </div>

    </div>
  )
}

export default Card