
import { budget } from "ducks";

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
