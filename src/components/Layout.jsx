import React from 'react'

const Layout = ({children}) => {
  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7 col-md-8">
          <div className="card">
            <div className="card-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout
