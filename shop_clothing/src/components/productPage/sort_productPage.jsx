import "../../components_style/productPage/sort_productPage_style.css"

function SortProductPage() {
    return ( 
        <div class="sort">

					<p className="sort__title">Sort By</p>
					<select className="sort__select" name="sort">
						<option value="">Name</option>
						<option value="">Price</option>
					</select>
					<p className="sort__title">Show</p>
					<select className="sort__select" name="show">
						<option value="">9</option>
						<option value="">12</option>
						<option value="">15</option>
					</select>
				</div>
     );
}

export default SortProductPage;