/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { pipe, filter, map, sum } from "ramda";
import moment from "moment";

import { budget } from "ducks";
import { calculation } from "utils";



// const getCurrentMonthFoodCarbonValue = pipe(
//   emissions.selectors.getFoodEmissions,
//   getCurrentMonthEmissions,
//   getCarbonValue
// );
// const getCurrentMonthMealCarbonValue = pipe(
//   emissions.selectors.getMealEmissions,
//   getCurrentMonthEmissions,
//   getCarbonValue
// ); 


export default {
  getMonthlyCarbonBudget: budget.selectors.getMonthlyCarbonBudget,

};
