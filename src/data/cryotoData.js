import btcLogo from "../assets/images/bitcoin.png";
import ethLogo from "../assets/images/eth.png";
import tetherLogo from "../assets/images/tether.png";

const cryptoData = [
  {
    id: 1,
    name: 'BTC',
    imgUrl: btcLogo,
    commission: '5%',
  },
  {
    id: 2,
    name: 'ETH',
    imgUrl: ethLogo,
    commission: '5%',
  },
  {
    id: 3,
    name: 'USDT',
    imgUrl: tetherLogo,
    commission: '0%',
  },
];

export default cryptoData;
