import { pipe } from "ramda";
import {
  TransportType,

} from "carbon-footprint";

import { t } from "../translations";
import { MeasureType } from "../../types/measureType";



const getFlightType = (duration: number): TransportType => {
  /* Below 3 hours */
  if (duration < 180) {
    return TransportType.shortHaulFlight;
  }

  /* Between 3 and 6 hours */
  if (duration < 360) {
    return TransportType.mediumHaulFlight;
  }

  /* Above 6 hours */
  return TransportType.longHaulFlight;
};

const getFlightEmissionValue = (duration: number): number => {
  switch (getFlightType(duration)) {
    case TransportType.shortHaulFlight: {
      /* Paris -> Toulouse 1h15 AF6122 588 km */
      /* Paris -> Stockholm 2h35 AF1462 1543 km */
      const averageSpeedShortHaulSpeed =
        ((588 * 1000) / (60 + 15) + (1543 * 1000) / (2 * 60 + 35)) / 2;
      return averageSpeedShortHaulSpeed * duration;
    }
    case TransportType.mediumHaulFlight: {
      /* Paris -> Istanbul 3h25 AF1390 2255 km */
      /* Paris -> Dakar 5h45 AF718 4205 km */
      const averageMediumHaulSpeed =
        ((2255 * 1000) / (3 * 60 + 25) + (4205 * 1000) / (5 * 60 + 45)) / 2;
      return averageMediumHaulSpeed * duration;
    }
    case TransportType.longHaulFlight: {
      /* Paris -> New York 8h15 AF22 5837 km */
      /* Paris -> Santiago 14h30 AF406 11648 km */
      const averageLongHaulSpeed =
        ((5837 * 1000) / (8 * 60 + 15) + (11648 * 1000) / (14 * 60 + 30)) / 2;
      return averageLongHaulSpeed * duration;
    }
    default:
      return 0;
  }
};



const toKWH = (x: number): number => (x * 3.6) / Math.pow(10, -6);
const toKgCO2 = (x: number): number => x * 1000;
const getCarbonIntensityInGramPerKWHromKgPerJoules = pipe(toKWH, toKgCO2, Math.round);


const getImperialMetricValue = (
  metricValue: number,
  useMetricUnits: boolean,
  measureType: MeasureType
): number => {
  if (useMetricUnits) {
    return metricValue;
  } else {
    if (measureType === MeasureType.mass) {
      /* kg -> lbs */
      return metricValue * 2.205;
    } else if (measureType === MeasureType.length) {
      /* km -> miles
      note: deviates from NMF.earth's standard of using meters as a reference */
      return metricValue / 1.609;
    }
  }
};

const getDisplayUnitsValue = (kgValue: number, useMetricUnits: boolean): number => {
  if (useMetricUnits) {
    if (kgValue <= 1) {
      return kgValue * 1000;
    } else if (kgValue > 1 && kgValue <= 1000) {
      return kgValue;
    } else {
      return kgValue / 1000;
    }
  } else {
    if (kgValue <= 0.454) {
      return getImperialMetricValue(kgValue, useMetricUnits, MeasureType.mass) * 16;
    } else {
      return getImperialMetricValue(kgValue, useMetricUnits, MeasureType.mass);
    }
  }
};

const getDisplayUnits = (kgValue: number, useMetricUnits: boolean, useSymbol = true): string => {
  const suffix = useSymbol ? "_SYMBOL" : "_FULL";

  if (useMetricUnits) {
    if (kgValue <= 1) {
      return t(`CALCULATION_GRAMS${suffix}`);
    } else if (kgValue > 1 && kgValue <= 1000) {
      return t(`CALCULATION_KILOGRAMS${suffix}`);
    } else {
      return t(`CALCULATION_TONNES${suffix}`);
    }
  } else {
    if (kgValue <= 0.454) {
      return t(`CALCULATION_OUNCES${suffix}`);
    } else {
      return t(`CALCULATION_POUNDS${suffix}`);
    }
  }
};

export default {
  getFlightType,
  getFlightEmissionValue,
  getCarbonIntensityInGramPerKWHromKgPerJoules,

  getImperialMetricValue,
  getDisplayUnitsValue,
  getDisplayUnits,
};
