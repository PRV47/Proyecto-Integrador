
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css";

/* === APLICACION === */

export let activeCategory = null;

export const setActiveCategory = (categoryIn) => {



  activeCategory = categoryIn;
}

export let activeProduct = null;



export const setActiveProduct = (productIn) => {



  activeProduct = productIn;


}

handleGetProductsToStore();



renderCategories();



/* === HEADER === */



export const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
    openModal();
});





/* === BUTTON SEARCH === */
const buttonSearch = document.getElementById("buttonSearch")
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
});
