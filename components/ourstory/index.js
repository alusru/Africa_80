const Story = () => {

    return (

        <div className="site-section bg-light counter" id="discover-section">
            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <div className="col-md-7 text-center">
                        <div className="block-heading-1">
                            <h2 className="text-black text-uppercase">Discover</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aperiam unde natus voluptates placeat accusamus vel laborum cupiditate. Reiciendis commodi perferendis dignissimos, amet quis.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">

                    <div className="col-lg-6 mb-5">
                        <img src="static/images/hero_1_no-text.jpg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 ml-auto align-self-center">
                        <h3 className="text-black text-uppercase mb-4">Build Schools in Africa</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo cupiditate vero fugiat sit eius sequi.</p>

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="block-counter-1 block-counter-1-sm">
                                    <span className="number"><span data-number="15">0</span></span>
                                    <span className="caption text-black">Schools</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="block-counter-1 block-counter-1-sm">
                                    <span className="number"><span data-number="1039">0</span></span>
                                    <span className="caption text-black">Students</span>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>

                <div className="row mb-5">

                    <div className="col-lg-6 mb-5 order-lg-2">
                        <img src="static/images/hero_2_no-text.jpg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 mr-auto align-self-center order-lg-1">
                        <h3 className="text-black text-uppercase mb-4">Feeding Children in Africa</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo cupiditate vero fugiat sit eius sequi.</p>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="block-counter-1 block-counter-1-sm">
                                    <span className="number"><span data-number="3298">0</span></span>
                                    <span className="caption text-black">Children</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="block-counter-1 block-counter-1-sm">
                                    <span className="number"><span data-number="38">0</span></span>
                                    <span className="caption text-black">Orphanage</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;