const SEARCH_RADIUS = 800;
const SEARCH_QUERY = 'hamburger';

export type GooglePlaceResult = google.maps.places.PlaceResult;

// https://developers.google.com/maps/documentation/javascript/places#TextSearchRequests
export const getNearbyBurgerRestaurants = (data: {
  lat: number;
  lng: number;
}): Promise<GooglePlaceResult[]> => {
  const { lat, lng } = data;
  const placesService = new google.maps.places.PlacesService(
    document.createElement('div')
  );

  const request: google.maps.places.TextSearchRequest = {
    location: new google.maps.LatLng(lat, lng),
    radius: SEARCH_RADIUS,
    query: SEARCH_QUERY,
  };

  return new Promise((resolve, reject) => {
    placesService.textSearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        if (results) {
          resolve(results);
        }

        reject('Failed to find restaurants');
      }
    });
  });
};
