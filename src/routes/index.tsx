import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '@components/layouts/MainLayout'

// pages
const MainPage = lazy(() => import('@pages/index'))
const NotFound = lazy(() => import('@pages/not-found'))
const CustomKeyboardsPage = lazy(() => import('@pages/custom-keyboards'))
const CodingPage = lazy(() => import('@pages/coding'))
const GamesPage = lazy(() => import('@pages/games'))

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/custom-keyboards" element={<CustomKeyboardsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes
