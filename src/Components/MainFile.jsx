import React from 'react'



const MainFile = () => {
  return (
    <div className='wraper'>
        <div className='container'>
        <div className='row'>
            <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-dark">
            <a href="index.html" className="navbar-brand p-0">
                <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Startup</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa-solid fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div className="dropdown-menu m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="detail.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="price.html" className="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" className="dropdown-item">Our features</a>
                            <a href="team.html" className="dropdown-item">Team Members</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="quote.html" className="dropdown-item">Free Quote</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                
            </div>
        </nav>

            </div>

        </div>
     
    </div>
   
    </div>
   
  )
}

export default MainFile
