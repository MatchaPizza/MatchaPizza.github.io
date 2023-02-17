import { Fragment, Suspense, useLayoutEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@components/layouts/Footer'
import Header from '@components/layouts/Header'
import './index.css'
import PageLoader from '@components/PageLoader'

const MainLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // get background image of the index page
    const mainBackgroundImage = document.getElementsByClassName(
      'main-background-image',
    )[0] as HTMLElement
    if (mainBackgroundImage) {
      if (headerRef.current) {
        mainBackgroundImage.style.height = `calc(100vh - ${headerRef.current.clientHeight}px)`
      }
    }
  })

  return (
    <Fragment>
      <Header headerRef={headerRef} />
      <main className="main-container">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer footerRef={footerRef} />
    </Fragment>
  )
}

export default MainLayout
