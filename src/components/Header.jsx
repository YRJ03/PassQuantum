import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Header({theme, setTheme}) {
  return (
    <nav className={`w-full px-5 md:px-8 py-2 flex justify-between items-center ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800'}`}>
        <h1 className='font-mono font-bold text-xl text-shadow-2xs text-shadow-blue-600'>
            <span>Pass</span>
            <span>Quantum</span>
        </h1>
        <button onClick={() => theme === 'light'?setTheme('dark'):setTheme('light')} className='cursor-pointer'>{theme === 'light' ? <MdDarkMode size={24}/> : <MdOutlineLightMode size={24}/>}</button>
    </nav>
  )
}

export default Header