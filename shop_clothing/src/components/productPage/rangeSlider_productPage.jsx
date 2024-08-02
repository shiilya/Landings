import { useState } from "react";

const RangeSlider = () => {

    const [rangeval, setRangeval] = useState(null);
  
    return (
      <div>
        <input type="range" className="custom-range" min="1" max="1000"
         onChange={(event) => setRangeval(event.target.value)} />
        <h4 className="product__title">$ {rangeval}</h4>
      </div>
    );
  };
  
  export default RangeSlider;