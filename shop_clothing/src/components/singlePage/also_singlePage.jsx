import "../../components_style/singlePage/also_singlePage_style.css";
import CardItem from "../card_item";

function AlsoSinglePage() {
  return (
    <section class="also">
      <div class="container">
        <h3 class="also__title">you may like also</h3>
        <div class="items__wrapper">
          <CardItem
            name="mango people t-shirt"
            price="52$"
            src="../img/item9.jpg"
          />
          <CardItem
            name="mango people t-shirt"
            price="51$"
            src="../img/item10.jpg"
          />
          <CardItem
            name="mango people t-shirt"
            price="54$"
            src="../img/item11.jpg"
          />
          <CardItem
            name="mango people t-shirt"
            price="52$"
            src="../img/item12.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default AlsoSinglePage;
