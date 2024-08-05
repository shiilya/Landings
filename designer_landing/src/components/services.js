import "../components_style/services_style.css"

function Services() {
    return ( 
        <section class="services">
        <div class="container">
            <div class="services_row">
                <div class="service_card">
                    <img class="service_card_img" src="./img/graphic 1.png" alt="UI/UX Design"/>
                    <h3 class="service_card_title">UI/UX Design</h3>
                    <p>Our design is translated into comprehensive digital environments built on latest development
                        standards.</p>
                </div>
                <div class="service_card">
                    <img class="service_card_img" src="./img/startup 1.png" alt="Development"/>
                    <h3 class="service_card_title">Development</h3>
                    <p>Our design is translated into comprehensive digital environments built on latest development
                        standards.</p>
                </div>
                <div class="service_card">
                    <img class="service_card_img" src="./img/browser 1.png" alt="Software Testing"/>
                    <h3 class="service_card_title">Software Testing</h3>
                    <p>Our design is translated into comprehensive digital environments built on latest development
                        standards.</p>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Services;