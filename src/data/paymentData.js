import masterCardLogo from "../assets/images/masterCard.png";
import visaLogo from "../assets/images/visa.png";
import skrillLogo from "../assets/images/skrill.png";
import pmLogo from "../assets/images/pm.png";
import piastrixLogo from "../assets/images/piastrix.png";
import sticPayLogo from "../assets/images/sticpay.png";
import pinLogo from "../assets/images/pin.png";

const paymentData = [
  {
    id: 1,
    label: 'POPULAR',
    name: 'Mastercard',
    imgUrl: masterCardLogo,
    commission: '5%',
  },
  {
    id: 2,
    label: 'TRUSTED',
    name: 'Visa',
    imgUrl: visaLogo,
    commission: '5%',
  },
  {
    id: 3,
    name: 'Skrill',
    imgUrl: skrillLogo,
    commission: '0%',
  },
  {
    id: 4,
    name: "Perfect Money, EUR",
    imgUrl: pmLogo,
    commission: "0%"
  },
  {
    id: 5,
    name: "Piastrix, EUR",
    imgUrl: piastrixLogo,
    commission: "0%"
  },
  {
    id: 6,
    name: "SticPay",
    imgUrl: sticPayLogo,
    commission: "0%"
  },
  {
    id: 7,
    name: "PIN",
    imgUrl: pinLogo,
    commission: "1%"
  }
];

export default paymentData;
