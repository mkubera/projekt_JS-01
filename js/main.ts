import Utils from "./utils";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "spin.js";

const newSpinner = new Spinner({ color: "#fff", lines: 12 });

console.log(newSpinner);

console.log(uuidv4());

console.log(Utils);
console.log(Utils.sayHi("Mikolaj"));
