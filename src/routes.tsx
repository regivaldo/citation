import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontofficeTemplate from './templates/FrontofficeTemplate'
import HomePage from './pages/HomePage'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<FrontofficeTemplate />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}
