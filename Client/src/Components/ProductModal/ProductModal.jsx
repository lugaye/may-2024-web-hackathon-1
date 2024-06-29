import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product }) => {
	return (
		<div className="ProductModal1">
			<div className="ModalLeft">
				<img src={product.image} alt={product.name} />
				<div className="ModalLeftBottom">
					<span> {product.name}</span>
					{product.price !== "Free" ? (
						<p className="ProductPrice">KSh. {product.price}</p>
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
										index < product.stars ? " colored" : ""
									}`}
								></i>
							))}
					</div>
				</div>
			</div>
			<div className="ModalRight">
				<div className="ModalDescription">
					<h3>Description</h3>
					<p>{product.description}</p>
				</div>
				<div className="Tags">
					{product.tags.map((tag) => (
						<div
							className="Tag flex items-center bg-teal-400/10 px-1 py-0.5 leading-5 text-teal-300"
							key={tag}
						>
							<p>{tag}</p>
						</div>
					))}
				</div>
				<div className="Btn">
					<button className="btn btn-primary">Get</button>
				</div>
			</div>
		</div>
	);
};

export default ProductModal;
