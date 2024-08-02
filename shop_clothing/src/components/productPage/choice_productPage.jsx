import "../../components_style/productPage/choice_productPage_style.css";
import CardsProductPage from "./cards_productPage";
import RangeSlider from "./rangeSlider_productPage";
import SortProductPage from "./sort_productPage";

function ChoiseProductPage() {
  return (
    <div className="product__box ">
      <div className="product__info">
        <form
          action="#"
          className="product__form"
          oninput="result.value=(range.value)"
        >
          <div className="product__wrapper">
            <div className="product__trend">
              <p className="product__title">Trending now</p>
              <div className="product__trend-box">
                <input
                  className="product__radio"
                  type="radio"
                  name="trend"
                  id="Bohemian"
                  value="Bohemian"
                />
                <label className="product__radio-label" for="Bohemian">
                  Bohemian
                </label>
                <input
                  className="product__radio"
                  type="radio"
                  name="trend"
                  id="Floral"
                  value="Floral"
                />
                <label className="product__radio-label" for="Floral">
                  Floral
                </label>
                <input
                  className="product__radio"
                  type="radio"
                  name="trend"
                  id="Lace"
                  value="Lace"
                />
                <label className="product__radio-label" for="Lace">
                  Lace
                </label>
              </div>
              <div className="product__trend-box">
                <input
                  className="product__radio"
                  type="radio"
                  name="trend"
                  id="Floral2"
                  value="Floral"
                />
                <label className="product__radio-label" for="Floral2">
                  Floral
                </label>
                <input
                  className="product__radio"
                  type="radio"
                  name="trend"
                  id="Lace2"
                  value="Lace"
                />
                <label className="product__radio-label" for="Lace2">
                  Lace
                </label>
                <input
                  className="product__radio"
                  type="radio"
                  name="trend"
                  id="Bohemian2"
                  value="Bohemian"
                />
                <label className="product__radio-label" for="Bohemian2">
                  Bohemian
                </label>
              </div>
            </div>

            <div className="product__size">
              <p className="product__title">SIZE</p>
              <div className="product__size-box">
                <input
                  className="product__check"
                  type="checkbox"
                  name="size"
                  id="xxs"
                />
                <label className="product__check-label" for="xxs">
                  xxs
                </label>
                <input
                  className="product__check"
                  type="checkbox"
                  name="size"
                  id="xs"
                />
                <label className="product__check-label" for="xs">
                  xs
                </label>
                <input
                  className="product__check"
                  type="checkbox"
                  name="size"
                  id="s"
                />
                <label className="product__check-label" for="s">
                  s
                </label>
                <input
                  className="product__check"
                  type="checkbox"
                  name="size"
                  id="m"
                />
                <label className="product__check-label" for="m">
                  m
                </label>
              </div>
              <div className="product__size-box">
                <input
                  className="product__check"
                  type="checkbox"
                  name="size"
                  id="l"
                />
                <label className="product__check-label" for="l">
                  l
                </label>
                <input
                  className="product__check"
                  type="checkbox"
                  name="size"
                  id="xl"
                />
                <label className="product__check-label" for="xl">
                  xl
                </label>
                <input
                  className="product__check"
                  type="checkbox"
                  name="size"
                  id="xxl"
                />
                <label className="product__check-label" for="xxl">
                  xxl
                </label>
              </div>
            </div>

            <div className="product__price">
              <p className="product__title">price</p>
              <RangeSlider />
            </div>
          </div>
          <div className="product__sort ">
            <SortProductPage />
          </div>

<CardsProductPage/>

        </form>
      </div>
    </div>
  );
}

export default ChoiseProductPage;
