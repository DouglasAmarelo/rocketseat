import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import formatPrice from '../../utils/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import * as S from './styles';

class Home extends Component {
	state = {
		products: [],
	};

	componentDidMount() {
		const getProducts = async () => {
			const response = await api.get('/products');
			const data = response.data.map(product => ({
				...product,
				priceFormatted: formatPrice(product.price),
			}));

			this.setState({ products: data });
		};

		getProducts();
	};

	handleAddProduct = id => {
		const { addToCartRequest } = this.props;

		addToCartRequest(id);
	};

	render() {
		const { products } = this.state;
		const { amount } = this.props;

		return(
			<S.ProductList>
				{products && products.map(product => (
					<S.ProductCard key={product.id}>
						<img src={product.image} alt={product.title} />

						<S.ProductTitle>{product.title}</S.ProductTitle>

						<S.ProductPrice>{product.priceFormatted}</S.ProductPrice>

						<S.ProductAddToCart onClick={() => this.handleAddProduct(product.id)}>
							<div>
								<MdAddShoppingCart size={16} color="#fff" /> {amount[product.id] || 0}
							</div>

							<span>Adicionar ao carrinho</span>
						</S.ProductAddToCart>
					</S.ProductCard>

				))}
			</S.ProductList>
		);
	};
};

const mapStateToProps = state => ({
	amount: state.cart.reduce((amount, product) => {
		amount[product.id] = product.amount;

		return amount;
	}, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);