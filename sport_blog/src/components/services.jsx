import "../components_style/services.css"

function Services() {
    return ( 
        <section className="services paddings" id="services-link">
            <div className="main-wrapper">
                <h2><span>Services</span></h2>
                <div className="services_block-item">
                    <div className="services_item">
                        <div className="box-icon">
                            <i className="fas fa-heart"></i>
                        </div>
                        <h3>Made With Love</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio a dolore. Ratione
                            exercitationem odit labore tenetur ullam, quaerat voluptas magni recusandae asperiores odio
                            enim sed excepturi cumque! Iure, aliquid!</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="services_item">
                        <div className="box-icon">
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3>Chat With Friends By Goal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio a dolore. Ratione
                            exercitationem odit labore tenetur ullam, quaerat voluptas magni recusandae asperiores odio
                            enim sed excepturi cumque! Iure, aliquid!</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="services_item">
                        <div className="box-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Get Results</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio a dolore. Ratione
                            exercitationem odit labore tenetur ullam, quaerat voluptas magni recusandae asperiores odio
                            enim sed excepturi cumque! Iure, aliquid!</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Services;