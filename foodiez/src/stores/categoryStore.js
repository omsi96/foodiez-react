import { makeAutoObservable } from "mobx";
import foodCategories from "../data/foodCategories";

import axios from "axios";
const categoryAxios = axios.create({
  baseURL: "https://524b02fd554a.ngrok.io/foodcategory/",
});
class FoodCategoriesStore {
  foodCategories = foodCategories;

  constructor() {
    makeAutoObservable(this);
  }

  createCategory = async (category) => {
    try {
      await categoryAxios.post("create", category);
      // success
      console.log("create category succeeded");
    } catch (error) {
      // Fail
      console.log("Couldn't create any category");
    }
  };

  // list categories
  fetchFoodCategories = async () => {
    // Yousef part:
  };
}

const foodCategoriesStore = new FoodCategoriesStore();

foodCategoriesStore.fetchFoodCategories();
export default foodCategoriesStore;
