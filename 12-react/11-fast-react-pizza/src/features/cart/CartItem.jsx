import Button from '../../ui/Button';
import { formatDate } from '../../utils/helpers';

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className='text-sm font-bols'>{formatDate(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
