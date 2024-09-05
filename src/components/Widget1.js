import React, {useState} from 'react'
import icon1 from '../assets/apps.png'
import icon2 from '../assets/help_24dp_4A4E54_FILL1_wght700_GRAD200_opsz20.png'

const Widget1 = () => {
    const [activeTab, setActiveTab] = useState('aboutme');

  return (
    
    <div className=" mt-2  mr-12 p-2 mb-10  ">
      <div className="flex flex-col w-[720px] h-[316px] mt-7 pt-6 mx-auto mr-[40px] bg-gray-700   text-white rounded-lg shadow-2xl shadow-black">


      <div className=' flex rounded-full justify-start ml-4 '>
        <img className='h-7 w-7 mt-4' src={icon2}></img>
        <div className="flex bg-black ml-4 w-[597px] h-[49px] justify-between text-white rounded-2xl shadow-md">

<button
  className={`flex-grow py-2 px-4 m-1 text-gray-500 ${
    activeTab === 'aboutme' ? 'border-b-1 rounded-2xl' : ''
  } hover:bg-gray-600 hover:text-white rounded-2xl`}
  onClick={() => setActiveTab('aboutme')}
>
  About Me
</button>

<button
  className={`flex-grow py-2 px-4 m-1 text-gray-500 ${
    activeTab === 'experience' ? 'border-b-1 rounded-2xl' : ''
  } hover:bg-gray-600 hover:text-white rounded-2xl`}
  onClick={() => setActiveTab('experience')}
>
  Experiences
</button>

<button
  className={`flex-grow py-2 px-4 m-1 text-gray-500 ${
    activeTab === 'recommended' ? 'border-b-1 rounded-2xl' : ''
  } hover:bg-gray-600 hover:text-white rounded-2xl`}
  onClick={() => setActiveTab('recommended')}
>
  Recommended
</button>

</div>

    </div>


      <div className='flex justify-start space-x-4 ml-4  ' >
        <div className='pt-5 flex justify-start space-x-10  mr-16  text-gray-400'>
        <img className='h-7 w-7 mt-10 ' src={icon1}></img>
        <p className='  '>Hello! l'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        <br></br>
        <br></br>
        I was born and raised in Albany, Ny & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 ear old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
      </div>
       </div>


    
      
     </div>
      </div>
     
        
    
  )
}

export default Widget1;