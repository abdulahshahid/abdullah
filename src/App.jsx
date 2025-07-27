import { Routes, Route } from 'react-router-dom'
import Portfolio from './components/LangingPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      {/* Example of additional routes:
      <Route path="/about" element={<About />} /> */}
    </Routes>
  )
}
