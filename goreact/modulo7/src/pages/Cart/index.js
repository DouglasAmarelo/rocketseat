import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import formatPrice from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

import * as S from './styles';
import Button from '../../components/Button';

const Cart = ({ cart, total, removeFromCart, updateAmountRequest }) => {
	const increment = product => updateAmountRequest(product.id, product.amount + 1)
	const decrement = product => updateAmountRequest(product.id, product.amount - 1)

	return(
		<S.Container>
			<S.ProductTable>
				<thead>
					<tr>
						<th></th>
						<th>Produto</th>
						<th>Quantidade</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{cart.map(product => (
						<tr key={product.id}>
							<td>
								<img src={product.image} alt={product.title} />
							</td>

							<td>
								<S.ProductTitle>{product.title}</S.ProductTitle>
								<S.ProductPrice>{product.priceFormatted}</S.ProductPrice>
							</td>

							<td>
								<S.ProductActions>
									<button type="button" onClick={() => decrement(product)}>
										<MdRemoveCircleOutline size={20} color="#7159c1" />
									</button>

									<input type="number" readOnly value={product.amount} />

									<button type="button" onClick={() => increment(product)}>
										<MdAddCircleOutline size={20} color="#7159c1" />
									</button>
								</S.ProductActions>
							</td>

							<td>
								<strong>{product.subtotal}</strong>
							</td>

							<td>
								<button type="button" onClick={() => removeFromCart(product.id)}>
									<MdDelete size={20} color="#7159c1" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</S.ProductTable>

			<S.ProductTotalCart>
				<Button>
					<div>
						Finalizar pedido
					</div>
				</Button>

				<S.Total>
					<span>Total:</span>
					<strong>{total}</strong>
				</S.Total>
			</S.ProductTotalCart>
		</S.Container>
	);
};

const mapStateToProps = state => ({
	cart: state.cart.map(product => ({
		...product,
		subtotal: formatPrice(product.price * product.amount)
	})),
	total: formatPrice(
		state.cart.reduce((total, product) => {
			return total + product.price * product.amount
		}, 0)
	),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);