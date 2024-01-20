import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */
const openAddEmissionNavigator = (navigation) => (props = {}) => {
  navigation.navigate("AddEmissionNavigator", props);
};

const openEmissions = (navigation) => (props = {}) => {
  navigation.navigate("Emissions", props);
};

/* navigate - modal */
// const openInfoModal = (navigation) => (props = {}) => {
//   navigation.navigate("ModalNavigator", {
//     screen: "InfoModal",
//     params: props,
//   });
// };
 

/* push */
const openMontlyBudget = (navigation) => (props = {}) => {
  navigation.push("MonthlyBudget", props);
};

const openAddEmission = (navigation) => (props = {}) => {
  navigation.push("AddEmission", props);
};
 

const navigate = (navigation) => ({
  goBack: navigation.goBack, 
  openAddEmissionNavigator: navigateOneTime(openAddEmissionNavigator(navigation)), 
  // openInfoModal: navigateOneTime(openInfoModal(navigation)), 
  openMontlyBudget: navigateOneTime(openMontlyBudget(navigation)),
  openAddEmission: navigateOneTime(openAddEmission(navigation)), 
  openEmissions: navigateOneTime(openEmissions(navigation)),
});

export default navigate;
