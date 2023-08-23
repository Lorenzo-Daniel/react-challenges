export const description = {
  title: " Multiple Filters",
  description:
    "Given a list of products and a list of filters, create a multi-filters buttons bar with a list of filters. If any of the filter is clicked, the list of products should change and reflect the appropriate products.",
  userStories: [
    "  Create a ´`<MultipleFilters />`´ component that takes care of the entire page, including filters bar and products list.",
    "When a ´`button`´ or a ´`filter`´ is clicked, the products should change. For example, if ´`Bags`´ are clicked, the products list should only show products that have a category of ´`Bags`´.",
    "When an already selected filter is clicked, it should remove the clicked filtered from the list of active filters.",
    " There can be more than 1 filter at a time.",
    "Selected filteres should have a different background color.",
    "If no filters are selected, it should render out all the products which are provided in the ´`items`´ array.",
  ],
};
