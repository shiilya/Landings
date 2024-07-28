import "../components_style/subscribe.css"

function Subscribe() {
    return ( 
        <section className="form paddings">
            <div className="form_main-wrapper">
                <div className="letters">
                    <p>Subscribe to our <span>NEWSLETTER</span></p>
                </div>
                <form>
                    <input type="email" placeholder="Enter your email"/>
                    <button type="submit">
                        <i className="far fa-paper-plane"></i>
                    </button>
                </form>
            </div>

        </section>
     );
}

export default Subscribe;