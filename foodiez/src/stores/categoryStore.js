import { makeAutoObservable } from "mobx";
// import foodCategories from "../data/foodCategories";

import axios from "axios";
const categoryAxios = axios.create({
  baseURL: "https://524b02fd554a.ngrok.io/foodcategory/",
});
class FoodCategoriesStore {
  foodCategories = [];

  constructor() {
    makeAutoObservable(this);
  }

  createCategory = async (category) => {
    try {
      const res = await categoryAxios.post("create", category);
      this.foodCategories.push(res.data);
      // success
      console.log("create category succeeded");
    } catch (error) {
      // Fail
      console.log("Couldn't create any category");
    }
  };

  getCategory = async (categorySlug) => {
    // Yousef part:
    try {
      const response = await categoryAxios.get(categorySlug);
      console.log("getCategory", response.data);
      return response.data;
    } catch (error) {
      console.error("FoodCategoriesStore -> fetchCategories -> error", error);
    }
  };
  // list categories
  fetchFoodCategories = async (category) => {
    // Yousef part:
    try {
      const response = await categoryAxios.get("", category);
      this.foodCategories = response.data;
    } catch (error) {
      console.error("FoodCategoriesStore -> fetchCategories -> error", error);
    }
  };
}

const foodCategoriesStore = new FoodCategoriesStore();

foodCategoriesStore.fetchFoodCategories();
export default foodCategoriesStore;
