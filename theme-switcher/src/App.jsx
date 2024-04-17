import { useEffect, useState } from 'react';
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
     <h1 className='p-4 bg-gray-500 text-3xl w-50'>Theme Context</h1>
     <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto fles justify-end mb-4'>
          <ThemeButton />
        </div>
        <div className='w-full max-w-sm mx-auto'>
          <Card />
        </div>
      </div>
     </div>
    </ThemeProvider>
  )
}

export default App;
