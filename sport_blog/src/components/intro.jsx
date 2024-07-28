import "../components_style/intro.css";

function Intro() {
  return (
    <div className="main-board paddings">
      <div className="main-wrapper">
        <div className="main-board_left">
          <h1 className="main-board_left_heading">
            Workouts will be even more convenient{" "}
          </h1>
          <div className="main-board_left_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            tempora, beatae porro tempore delectus alias libero autem deleniti
            minima veniam, pariatur suscipit cupiditate? Quas repellendus eum,
            ex dolore quae consectetur!
          </div>
          <div className="main-board_left_buttons">
            <a href="#" className="main-board_button-link">
              <i className="fab fa-android" />
              <div>
                <div>Get it on</div>
                <div className="main-board_button-link_bold">
                  <b>Google Play</b>
                </div>
              </div>
            </a>

            <a href="#" className="main-board_button-link">
              <i className="fab fa-apple" />
              <div>
                <div>Get it on</div>
                <div className="main-board_button-link_bold">
                  <b>Apple Store</b>
                </div>
              </div>
            </a>
          </div>
        </div>
        <img className="main-board_image" src="img/mobile-mockup.png" />
      </div>
    </div>
  );
}

export default Intro;
