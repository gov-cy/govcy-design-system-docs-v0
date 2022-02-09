# dsf-design-system
Gov.cy DSF design system documentation

This is the readme for the dsf-design-system-docs-static repository. 
Demo: https://gov-cy.github.io/dsf-design-system-docs-static/

## How it works

The manual uses the [Eleventy](https://www.11ty.dev/), a simpler static site generator to compile pages into a static site. 

## How to add a documentation page

## Other

### Add multiple languages

- Keep content in different folders based on language locale. i.e. english in `src/en` folder.
- Add the language code (which must match the folder name) in the *tags* and *locale* of the defaults in the folder's JSON file. i.e. in english in the `src/en/en.json` 
```json
{
  "layout" : "base.njk",
  "tags" : "en",
  "locale" : "en"
}
```
- Set the appropriate values in `src/_data/site.js`. for example 
```js
module.exports = {
  buildTime: new Date(),
  isMultiLanguage : true,
  languages: [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Ελληνικά",
      code: "el",
    },
  ],
  localization: {
    "el" : {
      "title" : "GOV.CY",
      "subtitle" : "Οδηγός Σχεδίασης",
      "description" : "Design your services using GOV.CY styles, components and patterns.",
      "menu" : "Μενού",
      "url" : "",
      "privacy_label":"Όροι Χρήσης",
      "cookie_label":"Προστασία Προσωπικών Δεδομένων",
      "accessibility_label":"Προσβασιμότητα",
      "copyright_label":"© Κυπριακή Δημοκρατία, 2021",
    },
    "en" : {
      "title" : "GOV.CY",
      "subtitle" : "Design System",
      "description" : "Design your services using GOV.CY styles, components and patterns.",
      "menu" : "Menu",
      "url" : "",
      "privacy_label":"Privacy statement",
      "cookie_label":"Cookie policy",
      "accessibility_label":"Accessibility statement",
      "copyright_label":"© Republic of Cyprus, 2021",
    }
  }
};
```
- You can have a default language by adding the following code in the `index.html` : `<meta http-equiv="refresh" content="0; URL=en/" />`. This will redirect users to the `en` locale content.
