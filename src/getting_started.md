---
title: "Get Started"
order: 0
tags : ['top_menu']
category: "get started"
---

Get started with GOV.CY design System.

## CSS and Javascript

The easiest way to add the GOV.CY styles is to use the pre-built `main.css` css file. Just download the <a href="{{ site.url }}{{'css/main.css' }}">CSS file</a> and include the following code in your `<head>`. 

```html
<!-- CSS -->
<link href="css/main.css" rel="stylesheet" >
```

All HTML code examples in this documentation utilizes the classes and styling defined in this css file. 

Many of our components require the use of JavaScript to function. Place the following `<script>` near the end of your pages, right before the closing `</body>` tag, to enable them.

```html
<!-- Javascripts -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
```

## Starter Template
Use the following HTML template for your GOV.CY pages.

```html
<!doctype html>
<html>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Social -->
    <meta property="og:description" content="Description of what the service does">
    <meta property="og:title" content="Service title - GOV.CY">
    <meta property="og:url" content="https://SERVICE_URL">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://URL_OF_CY_LOGO.png">
    <meta property="og:site_name" content="GOV.CY">
 
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="hthttps://SERVICE_URL">
    <meta property="twitter:title" content="Service title - GOV.CY">
    <meta property="twitter:description" content="Description of what the service does">
    <meta property="twitter:image" content="https://URL_OF_CY_LOGO.png">
 
    <!-- Theme --> 
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#31576F">
    <link rel="icon" type="image/png" sizes="48x48" href="img/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
 
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="img/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-57x57-precomposed.png">
 
    <!-- CSS -->
    <link href="css/main.css" rel="stylesheet" >
    
    <title>Service Name - GOV.CY</title>
    <meta name="description" content="Description of what the service does">
 
 
  </head>
  <body>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>
```

For more information on `<body>` content see the [page template](../styles/page_templates) section.  

## Important Globals
The starter template employs the following important global styles and settings that you’ll need to be aware of when using it.

### HTML5 doctype
Use the HTML5 doctype 

```html
<!doctype html>
<html>
  ...
</html>
```

### Responsive meta tag
To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Other Head Tags

### title, description 
- `title`: Use the following naming convention “Service Name - GOV.CY”
- `description`: Description of what the service does

```html
<title>Service Name - GOV.CY</title>
<meta name="description" content="Description of what the service does">
```

### social tags
Use the following meta tags inside the `<head>` tag.

```html
<meta property="og:description" content="Description of what the service does">
<meta property="og:title" content="Service title - GOV.CY">
<meta property="og:url" content="https://SERVICE_URL">
<meta property="og:type" content="website">
<meta property="og:image" content="https://URL_OF_CY_LOGO.png">
<meta property="og:site_name" content="GOV.CY">
 
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="hthttps://SERVICE_URL">
<meta property="twitter:title" content="Service title - GOV.CY">
<meta property="twitter:description" content="Description of what the service does">
<meta property="twitter:image" content="https://URL_OF_CY_LOGO.png">

```

### theme, app manifest and apple-touch-icon
Use the following tags inside the `<head>` tag.

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#31576F">
<link rel="icon" type="image/png" sizes="48x48" href="img/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="img/apple-touch-icon-120x120-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-57x57-precomposed.png">
```

The code above implies the existence of a `manifest.json` file. Use the following template for the manifest file. 

```json
{
    "short_name": "Service title",
    "name": "Service title - GOV.CY",
    "icons": [
        {
            "src": "/img/icons-128.png",
            "type": "image/png",
            "sizes": "128x128"
        },
        {
            "src": "/img/icons-192.png",
            "type": "image/png",
            "sizes": "192x192"
        },
        {
            "src": "/img/icons-512.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ],
    "start_url": "/LOCATION_OF_START_PAGE",
    "background_color": "#31576F",
    "display": "browser",
    "scope": "/",
    "theme_color": "#31576F"
}
```

**NOTE**: if the location or filenames of your images are different, please adjust the code appropriately. 

## <a id="image">Images</a>
Images mentioned are listed below and can be found below.

**og:image, twitter:image**
<img src="../img/icons-512.png" class="img-fluid" alt="og:image, twitter:image">

**favicon.ico-48x48**
<img src="../img/favicon-48x48.png" class="img-fluid" alt="favicon-48x48">

**favicon.ico-32x32**
<img src="../img/favicon-32x32.png" class="img-fluid" alt="favicon-32x32">

**favicon.ico-16x16**
<img src="../img/favicon-16x16.png" class="img-fluid" alt="favicon-16x16">

**apple-touch-icon-144x144-precomposed.png**
<img src="../img/apple-touch-icon-144x144-precomposed.png" class="img-fluid" alt="apple-touch-icon-144x144-precomposed.png">

**apple-touch-icon-120x120-precomposed.png**
<img src="../img/apple-touch-icon-120x120-precomposed.png" class="img-fluid" alt="apple-touch-icon-120x120-precomposed.png">

**apple-touch-icon-114x114-precomposed.png**
<img src="../img/apple-touch-icon-114x114-precomposed.png" class="img-fluid" alt="apple-touch-icon-114x114-precomposed.png">

**apple-touch-icon-72x72-precomposed.png**
<img src="../img/apple-touch-icon-72x72-precomposed.png" class="img-fluid" alt="apple-touch-icon-72x72-precomposed.png">

**apple-touch-icon-57x57-precomposed.png**
<img src="../img/apple-touch-icon-57x57-precomposed.png" class="img-fluid" alt="apple-touch-icon-57x57-precomposed.png">

**icons-128.png**
<img src="../img/icons-128.png" class="img-fluid" alt="icons-128.png">

**icons-192.png**
<img src="../img/icons-192.png" class="img-fluid" alt="icons-192.png">

**icons-512.png**
<img src="../img/icons-512.png" class="img-fluid" alt="icons-512.png">

