import { ICoordinate } from '@business-layer/services/entities';
function rad(x: number) {
  return (x * Math.PI) / 180;
}
/**
 * Calculates the distance between two points on Earth's surface, given their latitude and longitude coordinates.
 *
 * @param {ICoordinate} p1 - The first point, an object with `lat` and `lon` properties.
 * @param {ICoordinate} p2 - The second point, an object with `lat` and `lon` properties.
 * @returns {number} The distance in kilometers between the two points.
 */
export function distanceBetweenPoints(p1: ICoordinate, p2: ICoordinate) {
  const R = 6378137; // Earth’s mean radius in meter
  const dLat = rad(p2.lat - p1.lat);
  const dLong = rad(p2.lon - p1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) *
      Math.cos(rad(p2.lat)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  const roundedDistance = Math.floor(d / 1000 + 0.5); // Round to the nearest integer and convert meter to kilometer
  return roundedDistance.toString() + ' km';
}
