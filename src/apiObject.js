import { COVID19API } from "@evrimfeyyaz/covid-19-api";

const api = new COVID19API();

api.init()
.then(() => console.log("Initialized."))

api.getDataByLocation("Nigeria")
.then((data) => {
// Print the name of the location.
console.log(data.location); // -> Turkey

// Print the number of confirmed cases on Jan 22, 2020.
console.log(data.values[0].confirmed); // -> 0
});

export default apiObject;