import React,{useState} from 'react'
import icon1 from '../assets/apps.png'
import icon2 from '../assets/help_24dp_4A4E54_FILL1_wght700_GRAD200_opsz20.png'
import icon3 from '../assets/leftarrow.png'
import icon4 from '../assets/rightarrow.png'
const Widget2 = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };
  return (
    <>
    
      <div className='flex justify-between mb-10 mt-2  mr-12 p-2 '>
      <div className="w-[720px] h-[350px] mt-1 p-5 pt-6 mx-auto  mr-[40px]  bg-zinc-700 text-white rounded-lg shadow-2xl shadow-black border-1 ">
  
       

       
       <div className=' flex  flex-col   '>

        <img className='h-7 w-7' src={icon2}></img>
        <div className="flex ml-12 justify-between   ">
          <button className="bg-black w-[149px] h-[62px] text-white px-4   rounded-2xl  ">Gallery</button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="imageUpload"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="imageUpload"
            className="bg-gray-700 px-4 py-2 h-[46px] w-[131px] absolute  rounded-full  shadow-custom1 p-4  ml-80  cursor-pointer"
          >+ADD IMAGE</label>

          <div className=' flex justify-end flex-row gap-4 mr-10 '>
          <img className='h-[45px] w-[45px]  shadow-custom1  rounded-full' src={icon3}></img>
          <img className='h-[45px] w-[45px] shadow-custom1   rounded-full' src={icon4}></img>
         </div>
        </div>
       </div>


        <div className="flex justify-start space-x-4 space-y-10">
        <div className="flex justify-start space-x-4 space-y-10 overflow-x-auto scrollbar-hide">
        <img className='h-7 w-7 mt-10 ' src={icon1}></img>
    
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded ${index}`}
              className="w-[190px]  h-[179px] px-1  object-cover rounded-2xl scroll-smooth scroll-hide "
            />
           
          ))}
         
          
      
      </div>
      </div>
     
      </div>
      </div>
    
    
    </>
  )
}

export default Widget2