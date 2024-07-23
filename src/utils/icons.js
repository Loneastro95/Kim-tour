// utils/icons.js
import { faWifi, faSwimmer, faCoffee, faParking } from '@fortawesome/free-solid-svg-icons';

export const getAmenityIcon = (amenity) => {
  switch (amenity.toLowerCase()) {
    case 'Wifi':
      return faWifi;
    case 'pool':
      return faSwimmer;
    case 'breakfast':
      return faCoffee;
    case 'parking':
      return faParking;
    default:
      return null; // Default icon or null if not found
  }
};
