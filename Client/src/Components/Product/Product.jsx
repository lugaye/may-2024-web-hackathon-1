import React from "react";
import "./Product.css";

const Product = ({ product }) => {
	return (
		<div className="Product">
			<img src={product.image} alt={product.name} />
			<span>
				<h3>{product.title}</h3>
			</span>
			<div className="ProductBody">
				<p>{product.description}</p>
			</div>
			<div className="ProductBottom">
				<div className="TopSide">
					{product.price !== "Free" ? (
						<p className="ProductPrice">${product.price}</p>
					) : (
						<p className="ProductPrice">{product.price}</p>
					)}
					<div className="Ratings">
						{Array(5)
							.fill()
							.map((_, index) => (
								<i
									key={index}
									className={`fas fa-star${
										index < product.rating ? " colored" : ""
									}`}
								></i>
							))}
					</div>
				</div>
				<div className="Tags">
					{product.tags.map((tag) => (
						<div className="Tag flex items-center bg-teal-400/10 px-1 py-0.5  leading-5 text-teal-300">
							<p>{tag}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Product;
