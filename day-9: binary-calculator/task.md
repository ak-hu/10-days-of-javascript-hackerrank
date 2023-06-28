**Task**

Implement a simple calculator that performs the following operations on _binary numbers:_ addition, subtraction, multiplication, and division. Note that division operation must be _integer division_ only; for example, 1001/100 = 10, 1110/101 = 10, and 101/1 = 101.

- _Element IDs._ Each element in the document must have an `id`, specified below:

<table align="center">
    <tbody>
        <tr>
            <td>
                <code><b>innerHTML</b></code>
            </td>
            <td>
                <code><b>id</b></code>
            </td>
            <td>
                <code><b>Description/Behavior</b></code>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                <code>res</code>
            </td>
            <td>
                <span>Contains the result of button presses.</span>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                <code>btns</code>
            </td>
            <td>
                <span>A button container that displays all eight calculator buttons.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>0</code>
            </td>
            <td>
                <code>btn0</code>
            </td>
            <td>
                <span>A button expressing binary digit 0.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>1</code>
            </td>
            <td>
                <code>btn1</code>
            </td>
            <td>
                <span>A button expressing binary digit 1.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>C</code>
            </td>
            <td>
                <code>btnClr</code>
            </td>
            <td>
                <span>A button to clear the contents of res.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>=</code>
            </td>
            <td>
                <code>btnEql</code>
            </td>
            <td>
                <span>A button to evaluate the contents of the expression in res.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>+</code>
            </td>
            <td>
                <code>btnSum</code>
            </td>
            <td>
                <span>A button for the addition operation.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>-</code>
            </td>
            <td>
                <code>btnSub</code>
            </td>
            <td>
                <span>A button for the subtraction operation.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>*</code>
            </td>
            <td>
                <code>btnMul</code>
            </td>
            <td>
                <span>A button for the multiplication operation.</span>
            </td>
        </tr>
        <tr>
            <td>
                <code>/</code>
            </td>
            <td>
                <code>btnDiv</code>
            </td>
            <td>
                <span>A button for the integer division operation.</span>
            </td>
        </tr>
    </tbody>
</table>

- _Styling._ The document's elements must have the following styles:
    - `body` has a `width` of `33%`.
    - `res` has a `background-color` of `lightgray`, a `border` that is `solid`, a `height` of `48px`, and a `font-size` of `20px`.
    - `btn0` and `btn1` have a `background-color` of `lightgreen` and a `color` of `brown`.
    - `btnClr` and `btnEql` have a `background-color` of `darkgreen` and a `color` of `white`.
    - `btnSum`, `btnSub`, `btnMul`, and `btnDiv` have a `background-color` of `black`, a `color` of `red`.
    - All the buttons in `btns` have a `width` of `25%`, a `height` of `36px`, a `font-size` of `18px`, `margin` of `0px`, and `float` value `left`.

The `.js` and `.css` files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:

`<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>`