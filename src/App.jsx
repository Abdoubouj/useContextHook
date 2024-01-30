import './App.css'
import Blog from './components/Blog'
import { ThemeContextProvider } from './Context/ThemeContext'
function App() {
  return (
    <>
    <ThemeContextProvider>
     <Blog/>
    </ThemeContextProvider>
    </>
  )
}

export default App
