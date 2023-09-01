import { useState, useEffect } from "react"

export const Header = () => {

   
      const [darkMode, setDarkMode] = useState(false) 

      const handelClick = () =>{
        setDarkMode(!darkMode)
        console.log(darkMode)
    }

    useEffect(() => {
        if(darkMode){
          document.documentElement.classList.add('dark')
        }   else {
           document.documentElement.classList.remove('dark')
      } 
    }, [darkMode])

  return (
    <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[950px] md:mb-[480px] xl:mb-[250px] ">
        <h1 className="text-Very-Dark-Blue text-2xl font-bold mb-1 dark:text-Very-Pale-Blue">Social Media Dashboard</h1>
        <p className=" text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
        <hr className=" bg-black mb-[19px]" />
        <div className="flex justify-between">
            <p className=" text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue">Dark Mode</p>
            <label htmlFor="darkmode" className="border relative bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2px] overflow-hidden ">
              <input 
                onClick={handelClick} 
                type="checkbox" 
                id="darkmode" 
                className="sr-only peer" 
              />
              <div className=" peer-checked:bg-Toggle-Gradient absolute  top-0 left-0 w-full h-full "></div>
              <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full translate-x-[24px] peer-checked:translate-x-[0px] transition-all dark:bg-Very-Dark-Blue"></div>
            </label>
            
        </div>
    </header>
  )
}
