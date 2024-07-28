import "../components_style/ourBlog.css"

function OurBlog() {
    return ( 
        <section className="blog paddings" id="our-blog-link">
            <div className="main-wrapper">
                <h2><span>our blog</span></h2>
                <div>
                    <div className="blog-container">
                        <a href="#" className="blog-container_item">
                            <div className="blog-container_image block-image1"></div>
                            <div className="blog-container_item-text-container">
                                <span>11 july 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </a>
                        <a href="#" className="blog-container_item">
                            <div className="blog-container_image block-image2"></div>
                            <div className="blog-container_item-text-container">
                                <span>11 july 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </a>
                        <a href="#" className="blog-container_item">
                            <div className="blog-container_image block-image3"></div>
                            <div className="blog-container_item-text-container">
                                <span>11 july 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </a>
                        <a href="#" className="blog-container_item">
                            <div className="blog-container_image block-image4"></div>
                            <div className="blog-container_item-text-container">
                                <span>11 july 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </a>
                    </div>
                    <a href="#" className="blog_button">View All Posts</a>
                </div>
            </div>
        </section>
       
     );
}

export default OurBlog;