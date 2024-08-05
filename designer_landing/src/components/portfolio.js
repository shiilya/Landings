import "../components_style/portfolio_style.css"


function Portfolio() {
    return ( 
         
        <section className="portfolio">
        <div className="container">
            <div className="portfolio_title">
                <h2 className="title_1">portfolio</h2>
            </div>

            <div className="project" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
                <img src="./img/01.jpg" alt="Online fashion store" className="project_img"/>
                <h3 className="project_title"><a href="#!">Online fashion store - Homepage</a></h3>
            </div>

            <div className="project" data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
                <img src="./img/02.jpg" alt="Reebok Store" className="project_img"/>
                <h3 className="project_title"><a href="#!">Reebok Store - Concept</a></h3>
            </div>

            <div className="project" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
                <img src="./img/03.jpg" alt="Braun Landing Page" className="project_img"/>
                <h3 className="project_title"><a href="#!">Braun Landing Page - Concept</a></h3>
            </div>

        </div>
    </section>
  
    

     );
}

export default Portfolio;