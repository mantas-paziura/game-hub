import { Menu, MenuButton, Button, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Order } from '../hooks/useGames';

interface Props {
  selectedOrder: Order | null;
  onSelectOrder: (order: Order) => void;
}

function OrderSelector({ selectedOrder, onSelectOrder }: Props) {
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
        {orders.map((menuItem) => (
          <MenuItem key={menuItem.field} onClick={() => onSelectOrder(menuItem)}>
            {menuItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
export default OrderSelector;
