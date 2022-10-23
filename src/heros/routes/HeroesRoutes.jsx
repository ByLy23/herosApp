import { Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DCPages, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPages />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}
