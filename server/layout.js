'use strict';

export default function (content, initState) {
    return (`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <link href="/dist/css/client.css" rel="stylesheet">
            <title>React App</title>


        </head>

        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">${content}</div>
            <script type="text/javascript" src="/dist/js/client.js"></script>
        </body>
        </html>
    `);
};