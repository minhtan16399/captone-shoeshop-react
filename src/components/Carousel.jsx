import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner py-3">
                <div className="container">
                    <div className='carousel-item active'>
                        <div className="mx-auto row">
                            <div className='carousel-img col-12 col-sm-8 mx-sm-0 px-auto'>
                                <img src="https://drive.google.com/thumbnail?id=10OXQmB96-BMeRBzBgSg8BfaN1hw7q5ch" className="" alt="..." />
                            </div>
                            <div className="carousel-caption d-none d-sm-block col-4">
                                <h5>Product name</h5>
                                <p>Product description ....</p>
                                <button className="btn btn-danger">Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="mx-auto row">
                            <div className='carousel-img col-12 col-sm-8 mx-sm-0 px-auto'>
                                <img src="https://drive.google.com/thumbnail?id=10OXQmB96-BMeRBzBgSg8BfaN1hw7q5ch" className="" alt="..." />
                            </div>
                            <div className="carousel-caption d-none d-sm-block col-4">
                                <h5>Product name</h5>
                                <p>Product description ....</p>
                                <button className="btn btn-danger">Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className="mx-auto row">
                            <div className='carousel-img col-12 col-sm-8 mx-sm-0 px-auto'>
                                <img src="https://drive.google.com/thumbnail?id=10OXQmB96-BMeRBzBgSg8BfaN1hw7q5ch" className="" alt="..." />
                            </div>
                            <div className="carousel-caption d-none d-sm-block col-4">
                                <h5>Product name</h5>
                                <p>Product description ....</p>
                                <button className="btn btn-danger">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel