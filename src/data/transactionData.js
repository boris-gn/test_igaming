import masterCardLogo from "../assets/images/masterCard.png";
import sticPayLogo from "../assets/images/sticpay.png";

const transactionData = [
  {
    id: 1,
    method: 'SticPay, USD',
    type: 'Withdraw',
    transactionNumber: '142354',
    date: '02.01 at 12:34PM',
    amount: '23.05$',
    status: 'Processing',
    imgUrl: sticPayLogo,
  },
  {
    id: 2,
    method: 'SticPay, USD',
    type: 'Withdraw',
    transactionNumber: '142354',
    date: '05.12 at 3:40PM',
    amount: '123.27$',
    status: 'Active',
    imgUrl: sticPayLogo,
  },
  {
    id: 3,
    method: 'Mastercard, USD',
    type: 'Withdraw',
    transactionNumber: '23561',
    date: '24.11 at 4:20AM',
    amount: '80.00$',
    status: 'Performed',
    imgUrl: masterCardLogo,
  },
];

export default transactionData;