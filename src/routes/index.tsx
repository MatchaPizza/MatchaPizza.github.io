import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '@components/layouts/MainLayout'
import PageLoader from '@components/PageLoader'

// pages
import MainPage from '@pages/main'

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="loader" element={<PageLoader />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes
