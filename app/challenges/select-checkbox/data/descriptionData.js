export const description = {
    title: "Select All Checkboxes",
    description:"Given a ´`Select All`´ checkbox - toggle the children's checkboxes in such a way that when the ´`Select All`´ button is clicked, all the boxes are checked. Similarly, when the button is toggled, the checkboxes become unchecked.",
    userStories: [
      "Create a ´`Checkbox`´ component that takes in ´`checked`´, ´`onChange`´ and ´`label`´ as props.",
      " A `select all` checkbox should be there that toggles the state of all the children checkboxes.",
      "  Any of the individual checkboxes should have their own state. That means if any of the checkboxes is checked, it should reflect.",
      "If any one of the checkboxes is NOT selected, the ´`select all`´ checkbox should be ´`unchecked`´.",
      "If allthe checkboxes are selected, the ´`select all`´ checkbox should be checked.",
      "Loop through the given ´`listItems`´ array that follows the following structure.",
    ],
  };