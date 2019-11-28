import { PermissionsAndroid } from 'react-native';

async function permissionLocation() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
   
    return (
      (await granted) === PermissionsAndroid.RESULTS.GRANTED
    );
  } catch (err) {
    console.warn(err);
  }
}

export default permissionLocation;
