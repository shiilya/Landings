import "../components_style/contacts.css"

function Contacts() {
    return ( 
        <section className="contacts paddings" id="contacts">
            <div className="main-wrapper">
                <h2><span>contacts</span></h2>
                <div className="contacts-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320866.69106890593!2d13.181857672598802!3d51.07577679483847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf29101ad6a9%3A0x421b1cb4288feb0!2z0JTRgNC10LfQtNC10L0sINCT0LXRgNC80LDQvdC40Y8!5e0!3m2!1sru!2sru!4v1690649807305!5m2!1sru!2sru"
                        width="1000" height="450"  allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </section>
     );
}

export default Contacts;