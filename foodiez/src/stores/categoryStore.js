import { makeAutoObservable } from "mobx";
import foodCategories from "../data/foodCategories";
import slugify from "react";
// import axios from "axios";

class FoodCategoriesStore {
  foodCategories = foodCategories;

  constructor() {
    makeAutoObservable(this);
  }

  createCategory = (category) => {
    category.id = this.foodCategories[this.foodCategories.length - 1].id + 1;
    category.slug = slugify(category.name);
    this.foodCategories.push(category);
  };
}

const foodCategoriesStore = new FoodCategoriesStore();

// foodCategoriesStore.fetchfoodCategories();
export default foodCategoriesStore;
