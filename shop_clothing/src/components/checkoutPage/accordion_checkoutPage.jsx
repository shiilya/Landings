import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import "../../components_style/checkoutPage/accordion_checkoutPage_style.css";
import Button from "../button_item";

export default function AccordionCheckoutPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container container_accordion">
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className="accordion__item_name">
            01. shipping adress
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div class="checkout__header">
              <div class="checkout__content" id="data_1">
                <div class="checkout__content-guest">
                  <p class="checkout__content-guest-title">
                    Check as a guest or register
                  </p>
                  <p class="checkout__content-guest-text">
                    Register with us for future convenience
                  </p>
                  <form action="#" class="form__guest">
                    <div class="form__guest-wrapper">
                      <input
                        class="form__guest-input"
                        type="radio"
                        name="check"
                        id="guest"
                      />
                      <label class="form__guest-label" for="guest">
                        checkout as guest
                      </label>
                    </div>
                    <div class="form__guest-wrapper">
                      <input
                        class="form__guest-input"
                        type="radio"
                        name="check"
                        id="register"
                      />
                      <label class="form__guest-label" for="register">
                        register
                      </label>
                    </div>
                    <p class="checkout__content-guest-title">
                      register and save time!
                    </p>
                    <p class="checkout__content-guest-text">
                      Register with us for future convenience
                    </p>
                    <a href="#" class="form__guest-link">
                      Fast and easy checkout
                    </a>
                    <a href="#" class="form__guest-link">
                      Easy access to your order history and status
                    </a>
                    <button type="submit" class="form__guest-btn">
                      Continue
                    </button>
                  </form>
                </div>
                <div class="checkout__content-registed">
                  <h4 class="checkout__content-registed-title">
                    Already registed?
                  </h4>
                  <p class="checkout__content-registed-text">
                    Please log in below
                  </p>
                  <form action="#" class="form__registed">
                    <p class="form__registed-info">
                      EMAIL ADDRESS<sup>
                        <span>*</span>
                      </sup>
                    </p>
                    <input
                      type="email"
                      name="email"
                      class="form__registed-input"
                      required
                    />
                    <p class="form__registed-info">
                      PASSWORD<sup>
                        <span>*</span>
                      </sup>
                    </p>
                    <input
                      type="password"
                      name="password"
                      class="form__registed-input"
                      required
                    />
                    <p class="form__registed-required">* Required Fileds</p>
                    <button type="submit" class="form__registed-btn">
                      Log in
                    </button>
                    <a href="#" class="form__registed-link">
                      Forgot Password ?
                    </a>
                    
                  </form>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography className="accordion__item_name">
            02. BILLING INFORMATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__item_text">
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography className="accordion__item_name">
            03. SHIPPING INFORMATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__item_text">
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography className="accordion__item_name">
            04. SHIPPING METHOD
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__item_text">
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5bh-content" id="panel5bh-header">
          <Typography className="accordion__item_name">
            05. PAYMENT METHOD
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__item_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, fuga
            aliquid? Itaque porro dignissimos tempore quaerat! Amet, culpa
            veniam! Voluptate iste facilis tempora repellendus numquam deserunt
            facere voluptatibus animi beatae laboriosam est maxime, tenetur
            vitae quos autem commodi quam ex? Est quasi impedit unde non
            molestiae velit eius dolorem amet!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6bh-content" id="panel6bh-header">
          <Typography className="accordion__item_name">
            06. ORDER REVIEW
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__item_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quis
            est nobis ipsam tempora mollitia, culpa aliquam architecto
            temporibus cum soluta, fugit consequuntur distinctio aspernatur ab
            fuga? Corporis voluptas accusamus cum debitis voluptate ut, nesciunt
            placeat nam voluptatibus neque soluta blanditiis expedita quos est
            ullam nisi? Pariatur tempora quia perferendis reprehenderit saepe
            quibusdam, reiciendis ut mollitia id alias recusandae, fugit,
            explicabo maiores veniam ex iusto. Ipsam error voluptas eius
            mollitia. Asperiores possimus eius nihil quos culpa similique nobis,
            minus doloribus, quis vero labore mollitia! Ratione nihil unde
            tempore qui. Laborum ullam voluptate odio minima facilis aspernatur
            ex molestias consectetur quo.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
