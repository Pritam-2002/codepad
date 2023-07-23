import React from 'react'


function A() {
  return (
    
   
      <div class="flex  w-full h-screen rounded-xl ">
      
      <nav className="slide  bg-slate-600 w-[49rem] rounded-xl ">

      <div className="slide-inner-content  p-2 ">

        
      <label class="  bg-black   text-slate-50 font-semibold block border-2  border-transparent hover:border-white hover:bg-gray-800 ">Members</label>
        
        <div className="connect  font-bold  inline-block mt-4  rounded-lg  bg-green-900 p-3 text-slate-100">
          
          <h3>Connected</h3>
        </div>
        

       <div className="clients grid grid-cols-2 gap-4 mt-4 ">  
       
       <div className="usernames text-7 cursor-pointer flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
     <label class="cursor-pointer">User1</label>
     </div>

     <div className="usernames  cursor-pointer flex align-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
     <label class="cursor-pointer">User2</label>
     </div>

     <div className="usernames cursor-pointer flex align-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
     <label class="cursor-pointer">User3</label>
     </div>

     <div className="usernames cursor-pointer flex align-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
     <label class="cursor-pointer">User4</label>
     </div>
     
     </div> 
     
     

      
        
        <button className='  bg-blue-950 rounded-xl  text-stone-300 p-2 border-2 border-transparent  hover:border-white  hover:bg-blue-800  text-center fixed top-[80%] '>Copy Room id</button>
     <button className='  bg-red-800 rounded-xl  border-2 border-transparent  hover:border-white  hover:bg-red-600 p-2 text-stone-300   text-center  fixed top-[88%]'>leave</button>
     
     
     
     
     </div>


      
      

   

       </nav>
      
       
        <div class=" middle  bg-slate-800   w-full border-2 border-transparent"> 

        <label class=" text-red-950 font-bold     bg-gray-400  block border-2 border-black">output</label>
        
        <iframe class="h-full w-full"></iframe>
        
        </div>
      
          
          
      <div className="right rounded-xl  ml-5 text-white h-full w-full ">
        
        <label class="bg-slate-300  text-blue-800 font-semibold block border-2 border-black rounded-xl ">Write Your Code Here</label>
        <textarea class="bg-slate-700 text-white text-xl  w-full h-[95%] p-3 rounded-xl  border-0 outline-0"> </textarea>
        
        </div>
        
      
    
     

      
      </div>  
  )
}

export default A