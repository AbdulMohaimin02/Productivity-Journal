import { getJSON } from "./utils.js";

const API = "";

let notes;

try {
  const response = await fetch(API);
  notes = await getJSON(response);
} catch (error) {
  notes = error;
}

export { notes as default, API };