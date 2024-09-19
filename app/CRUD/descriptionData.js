export const description = {
  title: "CRUD",
  description:
    "In this challenge, your task is to develop an application that allows performing the four basic CRUD operations (Create, Read, Update, Delete) by interacting with an API.",

  userStories: [
    "API call and product display:",

    "On component mount, make an API call to fetch all the products.The products should be displayed in cards with the relevant information.",
    "Category filtering:",

    "Render buttons representing different product categories.",
    "When a category is selected, the products should be filtered to show only those in the chosen category.",
    "The selected category should be visually highlighted (e.g., with a color change) to indicate which filter is active Update and delete products:",

    "Each product card should have an update button and a delete button.",
    "The update button should allow editing the details of the selected product.",
    "The delete button should remove the product from the list.",
    "Create a new product:",

    "Outside of the product cards, there should be a button to create a new product.",
    "Clicking this button should display a form to enter the details of the new product.",
    "Additional considerations:",
    "The interface should be user-friendly and intuitive.",
    "The selected category should remain highlighted until the user selects another one.",
    "Ensure that all API interactions use the correct HTTP methods for each operation:",
    "GET to fetch products.",
    "POST to create a new product.",
    "PUT or PATCH to update products.",
    "DELETE to remove products.",
    "Good luck!",
  ],
};
