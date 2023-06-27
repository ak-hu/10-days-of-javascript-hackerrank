**Task**

We want to create nine buttons enclosed in a _div_, laid out so they form a 3X3 grid. Each button has a distinct label from 1 to 9, and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.

Complete the code in the editor so that it satisfies the following criteria:

- _Element IDs._ Each element in the document must have an `id`, specified below:

    - The button container _div's_ `id` must be `btns`.
    - The initial `innerHTML` labels must have the following button `id`s:

<table align="center">
    <tbody>
        <tr>
            <td>
                <code>innerHTML</code>
            </td>
            <td>
                <code>id</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>1</code>
            </td>
            <td>
                <code>btn1</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>2</code>
            </td>
            <td>
                <code>btn2</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>3</code>
            </td>
            <td>
                <code>btn3</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>4</code>
            </td>
            <td>
                <code>btn4</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>5</code>
            </td>
            <td>
                <code>btn5</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>6</code>
            </td>
            <td>
                <code>btn6</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>7</code>
            </td>
            <td>
                <code>btn7</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>8</code>
            </td>
            <td>
                <code>btn8</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>9</code>
            </td>
            <td>
                <code>btn9</code>
            </td>
        </tr>
    </tbody>
</table>

- _Styling._ The document's elements must have the following styles:
    - The `width` of `btns` is 75%, relative to the document body's width.
    - Each button (i.e., `btn1` through `btn9`) satisfies the following:
    - The `width` is 30%, relative to its container width.
    - The `height` is `48px`.
    - The `font-size` is `24px`.

- _Behavior._ Each time btn5 is clicked, the `innerHTML` text on the grid's outer buttons (i.e., `btn1`, `btn2`, `btn3`, `btn4`, `btn6`, `btn7`, `btn8`, `btn9`) must rotate in the clockwise direction. _Do not_ update the button `id`'s.

The `.js` and `.css` files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:

`<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>`