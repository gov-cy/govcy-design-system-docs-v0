module.exports = {
  buildTime: new Date(),
  isMultiLanguage : false,
  showTOC: true,
  version:"0.1.0", 
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
      "TOC_title" : "Περιεχόμενα",
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
      "TOC_title" : "On this page",
      "privacy_label":"Privacy statement",
      "cookie_label":"Cookie policy",
      "accessibility_label":"Accessibility statement",
      "copyright_label":"© Republic of Cyprus, 2021",
    }
  }
};