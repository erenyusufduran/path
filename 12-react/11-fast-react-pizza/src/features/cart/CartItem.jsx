import { formatDate } from '../../utils/helpers';

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatDate(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
