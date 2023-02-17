import { Fragment, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@components/layouts/Footer'
import Header from '@components/layouts/Header'
import './index.css'
import PageLoader from '@components/PageLoader'

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className="main-container">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  )
}

export default MainLayout
