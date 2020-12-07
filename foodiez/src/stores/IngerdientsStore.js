import { makeAutoObservable } from "mobx";
// import ingerdients from "../data/ingerdients";

import axios from "axios";
const ingerdientAxios = axios.create({
  baseURL: "https://524b02fd554a.ngrok.io/foodingerdient/",
});
class IngerdientsStore {
  ingerdients = [];

  constructor() {
    makeAutoObservable(this);
  }

  createIngerdient = async (ingerdient) => {
    try {
      const res = await ingerdientAxios.post("create", ingerdient);
      this.ingerdients.push(res.data);
      // success
      console.log("create ingerdient succeeded");
    } catch (error) {
      // Fail
      console.log("Couldn't create any ingerdient");
    }
  };

  getIngerdient = async (ingerdientSlug) => {
    // Yousef part:
    try {
      const response = await ingerdientAxios.get(ingerdientSlug);
      console.log("getIngerdient", response.data);
      return response.data;
    } catch (error) {
      console.error("IngerdientsStore -> fetchIngerdients -> error", error);
    }
  };
  // list ingerdients
  fetchIngerdients = async (ingerdient) => {
    // Yousef part:
    try {
      const response = await ingerdientAxios.get("", ingerdient);
      this.ingerdients = response.data;
    } catch (error) {
      console.error("IngerdientsStore -> fetchIngerdients -> error", error);
    }
  };
}

const ingerdientsStore = new IngerdientsStore();

ingerdientsStore.fetchIngerdients();
export default ingerdientsStore;
