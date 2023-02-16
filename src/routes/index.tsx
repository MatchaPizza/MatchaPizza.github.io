import React from 'react'
import MainPage from '@pages/main'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '@components/layouts/MainLayout'
import PageLoader from '@components/PageLoader'

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
