import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../../Components/Product/Product";
import ProductSkeleton from "../../Components/ProductSkeleton/ProductSkeleton";
import axios from "axios";
import { Helmet } from "react-helmet";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	// fetch products from database
	useEffect(() => {
		axios
			.get("https://quaint-portfolio.vercel.app/api/products")
			.then((res) => {
				setProducts(res.data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
				throw error;
			});
	}, []);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	return (
		<div className="Main">
			<Helmet>
				<title>Products | Quaint</title>
				<meta name="description" content="View our products and services, OptiSoft." />
			</Helmet>
			<div className="Container">
				<div className="Title">
					<h1>Products</h1>
				</div>
				<div className="Products">
					{products.map((product) => (
						<React.Fragment key={product.id}>
							{isLoading ? (
								<ProductSkeleton product={product} />
							) : (
								<Product product={product} isModalOpen={isModalOpen} />
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
