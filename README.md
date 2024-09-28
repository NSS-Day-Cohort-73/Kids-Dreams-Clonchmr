# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The code for the child click event is in the Kids.js module. When the click happens it checks if the click target has the "child" data-type. If it does, it gets the childs name and wish from the hidden state on the list item, and renders the interpolated string into the window alert.  

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Because it needs to be able to check the celebrityId property of each child object against the id property of each celebrity object which you are iterating through in the function itself. It effectively works as a nested for of loop.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > As the for of loop iterates through the celebrities array, and renders each celebrity as a list item, you apply hidden state on each list item that references that celebrities sport. Then you define a click event that if a celebrity is clicked on, it references that hidden state and interpolates it into a string that you're displaying in a window alert.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Its accessing the mainContainer id from the DOM using the querySelector method. Then it is generating an HTML structure where it invokes the Kids, Celebrities, and Pairings generator functions to render the HTML list items. It is then applying that HTML structure to the mainContainer we accessed before using the innerHTML method.
