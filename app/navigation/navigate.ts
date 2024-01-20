import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */
// const openAddEmissionNavigator = (navigation) => (props = {}) => {
//   navigation.navigate("AddEmissionNavigator", props);
// };


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


const navigate = (navigation) => ({
  goBack: navigation.goBack,
  // openAddEmissionNavigator: navigateOneTime(openAddEmissionNavigator(navigation)),
  // openInfoModal: navigateOneTime(openInfoModal(navigation)), 
  openMontlyBudget: navigateOneTime(openMontlyBudget(navigation)),

});

export default navigate;
