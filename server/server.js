import App from '../src/App';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

const app = express();

app.use((req, res) => {
    const componentHTML = ReactDOM.renderToString(<App />);
    res.end(renderHTML(componentHTML));
});

function renderHTML (componentHTML) {
    const staticUrl = 'http://localhost:8050';
    const bundle = `${staticUrl}/static/build/bundle.js`;
    const styles = `${staticUrl}/static/build/styles.css`;
    return `
        <!DOCTYPE html>
          <html>
          <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Webpack setup</title>
              <link rel="stylesheet" href="${styles}">
          </head>
          <body>
            <div id="react-view">${componentHTML}</div>
            <script type="application/javascript" src="${bundle}"></script>
          </body>
        </html>
    `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
