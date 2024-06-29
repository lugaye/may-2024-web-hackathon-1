import React, { useState } from "react";
import "./Product.css";
import { Modal } from "antd";
import ProductModal from "../ProductModal/ProductModal";

const Product = ({ product }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};
	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="Product" onClick={handleModalOpen}>
			<img src={product.image} alt={product.name} />
			<span>
				<h3>{product.name}</h3>
			</span>
			<div className="ProductBody">
				<p>{product.description}</p>
			</div>
			<div className="ProductBottom">
				<div className="TopSide">
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
			</div>
			{isModalOpen && (
				<Modal
					open={isModalOpen}
					onCancel={handleModalClose}
					footer={null}
					centered
					width={800}
					maskClosable={true}
					className="ProductModal bg-slate-900"
				>
					<ProductModal product={product} handleModalClose={handleModalClose} />
				</Modal>
			)}
		</div>
	);
};

export default Product;
