import { v4 as uuidv4 } from 'uuid';
import TravelerCabin from '../images/TravelerCabin.jpg';
import UrologyHospital from '../images/UrologyHospital.png';
import UndergroundTrainStation from '../images/UndergroundTrainStation.jpg';
import FiveStarHotel from '../images/FiveStarHotel.jpg';
import ResidentialDuplex from '../images/ResidentialDuplex.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Urology Hospital Renovation',
    desc: 'Location:2 No Gate, Chattogram Project Year: 2022',
    img: UrologyHospital,
    link: '#',
  },
  {
    id: uuidv4(),
    name: 'Underground Train Station Concept',
    desc: 'Location: Kuwait Project Year:   2020',
    img: UndergroundTrainStation,
    link: '#',
  },
  {
    id: uuidv4(),
    name: '5 Star Hotel Design Proposal',
    desc: 'Location: Khulshi, Chattogram Project Year:   2021',
    img: FiveStarHotel,
    link: '#',
  },
  {
    id: uuidv4(),
    name: 'Residential Duplex Design',
    desc: 'Location: Shatkaniya, Chattogram Project Year:   2020',
    img: ResidentialDuplex,
    link: '#',
  },
  {
    id: uuidv4(),
    name: 'Traveler Cabin Design',
    desc: 'Location: Variant Places of Canada Project Year:   2019',
    img: TravelerCabin,
    link: '#',
  },
];

export default projects;
