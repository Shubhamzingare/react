 import React from 'react'
 
 function cards({username = `User` , post = `Not Assigned Yet`}) {
  // console.log(props);
   return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"></img>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, accusantium.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          {post}
        </div>
      </figcaption>
    </div>
  </figure>
   )
 }
 
 export default cards