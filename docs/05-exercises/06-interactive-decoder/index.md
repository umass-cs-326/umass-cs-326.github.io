# COMPSCI 326 Web Programming


## Exercise #6 Interactive Decoder Web Page


---


# Overview

For this exercise you will refactor the web page you built in the previous exercise to create an interactive web interface to the decoder class. You should use your solution from the previous exercise or use our **decoder.js** and **encoder.html** reference implementation. Note, that for this exercise you are required to use modules. If you do use your own solution, make sure you copy your JS file into the same folder as the HTML document you are about to complete. You should write your solutions in VSCode (or an editor of your choice). The web application you will create should look and work roughly like this:



![](exercise6.gif)


The application works as follows:



* Enter a key, consisting of 26 letters (for now, no validation or error-checking is required).
* Optionally, enter text to encode or decode
* When text is entered into the “Key” text box, the background will be yellow with black text until a 26-letter key (all lowercase) has been entered. Any uppercase letters will not be accepted. If a valid key has been entered, the background turns white.
* When you type into the “Text to encode” text box, it will encode upon each keyup event. It will also turn the background color in the “Encoded” text box to red and the font color to white if there is something to encode; otherwise the background color is white.
* When you type into the “Text to decode” text box, it will decode upon each keyup event. It will also turn the background color in the “Encoded” text box to green and the font color to white if there is something to encode; otherwise the background color is white.


# Starter Kit

[Download the Starter Kit!](https://drive.google.com/drive/folders/1KA7pEb3-H0jw4e_wMSahtzUAlAAftvbm?usp=sharing)

You are provided the **decoderRingClass.js** solution from the last exercise. This file contains the class definition for the **decoder** and **decoderRing** classes. You will use **decoder** in this exercise to encode/decode text the user enters into the interface. You will not need to make any modifications to that file. We also provide an **index.html** file containing the solution from the previous exercise. Lastly, we provide interactive.js which you will use to write JavaScript functions that set up event handlers for the application’s interactivity. You will need to modify and update both **index.html** and **interactive.js** to build the user interface for our simple interactive encoder/decoder application.


# TODO #1: User Interface and Module Setup

This part is really easy. Do the following:



1. Remove **&lt;input type="button" onClick="doIt()" value="Go">** from **index.html**.
2. Remove all the existing **&lt;script>** tags and their contents.
3. Create a new **&lt;script>** tag that loads in **interactive.js** as a module.
4. At the end of **decoderRingClass.js** export the decoder class like this: \
 \
export { decoder }; \

5. Import the **decoder** class into **interactive.js** at the top like so: \
 \
import { decoder } from './decoderRingClass.js'; \


Now that we have all of that done, we can move on to the next TODO. You may find it helpful to read about import[^1] and export[^2] from the MDN Web Docs.

You will find **TODO #1** in the **index.html** , **decoderRingClass.js**, and **interactive.js** files.


# TODO #2: Application Interactivity

Now that we have the UI and the JS files/modules ready, we are now going to implement the interactivity of the application. You are to write the following functions:


<table>
  <tr>
   <td><strong>Function Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>validateKeyTextInput()</strong>
   </td>
   <td>This function looks at the key input box to see if it is 26 letters all lowercase. If it is, we change the background color to white. If it is not, we change the background color to yellow.
   </td>
  </tr>
  <tr>
   <td><strong>colorEncodedTextBox()</strong>
   </td>
   <td>This function looks at the encoded text box. If there is nothing in it, the background color is set to white and the text color is set to black. If there is something in it, the background color is set to red and the text color is set to white.
   </td>
  </tr>
  <tr>
   <td><strong>colorDecodedTextBox()</strong>
   </td>
   <td>This function looks at the decoded text box. If there is nothing in it, the background color is set to white and the text color is set to black. If there is something in it, the background color is set to green and the text color is set to white.
   </td>
  </tr>
  <tr>
   <td><strong>encodeText()</strong>
   </td>
   <td>This function grabs the content of the encode text box, calls the encode method of the Decoder class on that text, and sets the value of the encoded text box to the result of the encode method.
   </td>
  </tr>
  <tr>
   <td><strong>decodeText()</strong>
   </td>
   <td>This function grabs the content of the decode text box, calls the decode method of the Decoder class on that text, and sets the value of the decoded text box to the result of the decode method.
   </td>
  </tr>
</table>


 \
Note: We recommend that you test these functions to make sure they are working. You can do this by simply calling the functions in the interactive.js file and using VSCode’s Live Server extension to run the application.

You will find **TODO #2** in the **interactive.js **file.


# TODO #3: Hooking it all up

Now that you have tested the functions in the previous TODO, you need to hook everything up so that the user can interact with the application. To complete this exercise, write the following code in **interactive.js**:



1. Set the initial background color of the key text box to yellow.
2. Add an event listener to the key input box such that on a keyup event it will call the **validateKeyTextIntput** function.
3. Add two _keyup_ event listeners to the **encode** text box. One for encoding the text and the other to color the encoded text box. The functions in the previous TODO come in handy for this.
4. Add two _keyup_ event listeners to the decode text box. One for decoding the text and the other to color the decoded text box. The functions in the previous TODO come in handy for this.

That's it! You should now have a working interactive decoder web application! Use VSCode’s Liver Server extension to run your encoder/decoder web application!


# Submission

You must do the following to submit this assignment:



* Create a Zip archive of the folder containing your solution files.
* Upload this Zip file to the Moodle assignment.
* Check to make sure you uploaded your Zip archive to the Moodle assignment.
* Check again.


# Rubric and Grading

Use the following rubric to satisfy the requirements of this assignment. We will be using this rubric to score your submission


## Exercise (2 points)



* 2 points, a reasonable attempt was made at completing the exercise, a solid attempt was made at completing all TODOs.
* 1 point, an attempt was made, but was incomplete or had missing or empty parts, not all TODOs were completed, minimal work.
* 0 points, empty or no submission.

<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     "import - JavaScript - MDN Web Docs." 28 Apr. 2022, [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import). Accessed 25 May. 2022.

[^2]:
     "export - JavaScript - MDN Web Docs." 12 Apr. 2022, [https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export). Accessed 25 May. 2022.
