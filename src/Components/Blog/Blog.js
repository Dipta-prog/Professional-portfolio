import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        // <div>
        //     <h3 className="about-blog-header">Blog</h3>
        //     <div class="container-fluid py-3">


        //         <div class="card blog-card">
        //             <div class="row ">

        //                 <div class="col-md-7 px-3">
        //                     <div class="card-block px-6">
        //                         <h4 class="card-title">My new Idea</h4>
        //                         <p class="card-text">This content coming soon</p>
        //                         <p class="card-text">This content coming soon</p>
        //                         <br />
        //                         <a href="#" class="mt-auto btn btn-primary  ">Read More</a>
        //                     </div>
        //                 </div>



        //                 <div class="col-md-5">
        //                     <div id="CarouselTest" class="carousel slide" data-ride="carousel">
        //                         <ol class="carousel-indicators">
        //                             <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
        //                             <li data-target="#CarouselTest" data-slide-to="1"></li>
        //                             <li data-target="#CarouselTest" data-slide-to="2"></li>

        //                         </ol>
        //                         <div class="carousel-inner">
        //                             <div class="carousel-item active">
        //                                 <img class="d-block" src="https://picsum.photos/450/300?image=1072" alt=""></img>
        //                             </div>
        //                             <div class="carousel-item">
        //                                 <img class="d-block" src="https://picsum.photos/450/300?image=855" alt=""></img>
        //                             </div>
        //                             <div class="carousel-item">
        //                                 <img class="d-block" src="https://picsum.photos/450/300?image=355" alt=""></img>
        //                             </div>
        //                             <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
        //                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //                                 <span class="sr-only">Previous</span>
        //                             </a>
        //                             <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
        //                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //                                 <span class="sr-only">Next</span>
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>


        //     </div>

        //     <div class="container">
        //         <div class="card float-left">
        //             <div class="row ">

        //                 <div class="col-sm-7">
        //                     <div class="card-block">
        //                         <h4 class="card-title">My new Idea</h4>
        //                         <p>This content coming soon</p>
        //                         <a href="#" class="btn btn-primary btn-sm">Read More</a>
        //                     </div>
        //                 </div>

        //                 <div class="col-sm-5">
        //                     <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt=""></img>
        //                 </div>
        //             </div>
        //         </div>


        //         <div class="card float-right">
        //             <div class="row">
        //                 <div class="col-sm-5">
        //                     <img class="d-block w-100" src="https://picsum.photos/150?image=641" alt=""></img>
        //                 </div>
        //                 <div class="col-sm-7">
        //                     <div class="card-block">

        //                         <h4 class="card-title">My new Idea</h4>
        //                         <p>This content coming soon</p>
        //                         <a href="#" class="btn btn-primary btn-sm float-right">Read More</a>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className="container-fluid">
            <h3 className="about-blog-header">Blog</h3>
            <div className="row">
                <div className="col-md-4 p-3">
                    <div class="card card-custom bg-white border-white border-0">
                        <div class="card-custom-img" style={{ backgroundImage: "url('http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg')" }}></div>
                        <div class="card-custom-avatar">
                            <img class="img-fluid" src="https://x-factormarketing.com/wp-content/uploads/2018/10/Blog-image.png" alt="Avatar" />
                        </div>
                        <div class="card-body" style={{ overflowY: "auto", paddingBottom: "5px" }}>
                            <h4 class="card-title">My new blog</h4>
                            <p class="card-text">This content is coming soon!</p>
                        </div>
                        {/* <div class="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
                            <a href="#" class="btn btn-primary">Option</a>
                        </div> */}
                    </div>

                </div>
                <div className="col-md-4 p-3">
                    <div class="card card-custom bg-white border-white border-0">
                        <div class="card-custom-img" style={{ backgroundImage: "url('http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg')" }}></div>
                        <div class="card-custom-avatar">
                            <img class="img-fluid" src="https://x-factormarketing.com/wp-content/uploads/2018/10/Blog-image.png" alt="Avatar" />
                        </div>
                        <div class="card-body" style={{ overflowY: "auto", paddingBottom: "5px" }}>
                            <h4 class="card-title">My new blog</h4>
                            <p class="card-text">This content is coming soon!</p>
                        </div>
                        {/* <div class="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
                            <a href="#" class="btn btn-primary">Option</a>
                        </div> */}
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div class="card card-custom bg-white border-white border-0">
                        <div class="card-custom-img" style={{ backgroundImage: "url('http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg')" }}></div>
                        <div class="card-custom-avatar">
                            <img class="img-fluid" src="https://x-factormarketing.com/wp-content/uploads/2018/10/Blog-image.png" alt="Avatar" />
                        </div>
                        <div class="card-body" style={{ overflowY: "auto", paddingBottom: "5px" }}>
                            <h4 class="card-title">My new blog</h4>
                            <p class="card-text">This content is coming soon!</p>
                        </div>
                        {/* <div class="card-footer" style={{ background: "inherit", borderColor: "inherit" }}>
                            <a href="#" class="btn btn-primary">Option</a>
                        </div> */}
                    </div>
                </div>
 
            </div>
        </div>
    );
};

export default Blog;