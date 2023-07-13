import React from "react";
import "./Products.css";
import { productsData } from "../../../Data";
import Product from "../../Components/Product/Product";
import ProductSkeleton from "../../Components/ProductSkeleton/ProductSkeleton";

const Products = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<div className="Main">
			<div className="Container">
				<div className="Products">
					{productsData.map((product) => (
						<>
							{isLoading ? (
								<ProductSkeleton key={product.id} product={product} />
							) : (
								<Product key={product.id} product={product} />
							)}
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
