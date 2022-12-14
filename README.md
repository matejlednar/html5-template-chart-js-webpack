# HTML5 Template + Chart.js + webpack (Boilerplate + Build tool)

HTML5 template with CSS, JavaScript, Chart.js, images, and fonts support.
The build tool is included (CSS and JS optimization support).

## File structure
- src/css/styles.css - place your CSS here,
- src/js/script.js - place your JavaScript here,
- src/fonts/ - place your fonts here,
- src/images/ - place your images here,
- src/index.html - place your HTML here,

## Prerequisites

- Node.js
- npm

## Installation

```npm install```

## Scripts

### Run project/server

``` npm run start ```

### Build project

``` npm run build ```

## Run build/production version

Run index.html file (dist/index.html).
You can use the Live server to run index.html.

## Configuration

### npm 

#### JavaScript entry point

Edit package.json file.

Change the entry point here.

``` "main": "src/js/script.js",```

### webpack

#### Output directory

Edit webpack.config.js file.

Change the output directory here.

```path: path.resolve(__dirname, "dist"),```
