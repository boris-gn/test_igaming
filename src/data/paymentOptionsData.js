import masterCardLogo from "../assets/images/masterCard.png";
import visaLogo from "../assets/images/visa.png";
import btcLogo from "../assets/images/bitcoin.png";


const paymentOptions = [
    {
        id: 1,
        icon: masterCardLogo,
        method: 'Mastercard',
        currency: 'USD',
        commission: 3,
        description: 'Please notice that you will send money in the USD'
    },
    {
        id: 2,
        icon: visaLogo,
        method: 'Visa',
        currency: 'USD',
        commission: 2,
        description: 'Please notice that you will send money in the USD'
    },
    {
        id: 3,
        icon: btcLogo,
        method: 'Bitcoin',
        currency: 'BTC',
        commission: 1,
        description: 'Please notice that you will send money in Bitcoin'
    }
];

export default paymentOptions;
