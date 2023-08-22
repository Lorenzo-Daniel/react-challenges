export const description = {
  title: "useOutsideClick Custom Hook",
  description:
    "useOutsideClick custom hook can be used to determine if a click event was triggered outside of the target element's boundary. Create a function called useOutsideClick that triggers a toast if a click event is triggered outside of a centered div element.",
  userStories: [
    "    Create a custom hook called ´`useOutsideClick`´  that takes in two parameters - ´`ref `´ and ´`callback`´ .",
    "The ´`ref`´  is the reference to the central ´`div`´  element. Use ´`useRef()`´  for creating refs.",
    " The callback parameter is the function that gets triggered if a click event occurs ´`outside`´  of the desired div element.",
    " If a click event is triggered inside of the ´`div`´  - do nothing. That means, there should be NO toast displaying on the screen.",
    " If a click event is triggered outside of the ´`div`´  - show a toast / console log 'Clicked outside' text to notifiy the end user that the click was triggered outside.",
  ],
};
