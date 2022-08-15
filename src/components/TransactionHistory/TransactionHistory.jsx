import PropTypes from 'prop-types';
import {
  THead,
  TBody,
  TRows,
  Th,
  Td,
  Table,
} from './TransactionHistory.styles';

export const Transaction = ({ transactions }) => {
  const keys = Object.keys(transactions[0]);
  return (
    <Table>
      <THead>
        <TRows>
          <Th>{keys[1]}</Th>
          <Th>{keys[2]}</Th>
          <Th>{keys[3]}</Th>
        </TRows>
      </THead>
      <TBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TRows key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </TRows>
          );
        })}
      </TBody>
    </Table>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.array.isRequired,
};


// shape({
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired,
//   }).
