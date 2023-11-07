import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import Order from '../entities/Order';
import useGameQueryStore from '../store';

function OrderSelector() {
  const selectedOrder = useGameQueryStore((s) => s.gameQuery.order);
  const setOrder = useGameQueryStore((s) => s.setOrder);

  const orders: Order[] = [
    { label: 'Popularity', field: 'added', reverse: true },
    { label: 'Date added', field: 'created', reverse: true },
    { label: 'Name', field: 'name', reverse: false },
    { label: 'Release date', field: 'released', reverse: true },
    { label: 'Average rating', field: 'rating', reverse: true },
  ];

  return (
    <Menu>
      <MenuButton as={Button} fontWeight='normal' rightIcon={<BsChevronDown />}>
        Order by:{' '}
        <Text as='span' fontWeight='bold'>
          {selectedOrder?.label || 'Popularity'}
        </Text>
      </MenuButton>
      <MenuList>
        {orders.map((order) => (
          <MenuItem key={order.field} onClick={() => setOrder(order)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
export default OrderSelector;
