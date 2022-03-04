---
"title" : "Error Summary"
date: 2022-02-01 00:01:01Z
---
Use this component at the top of a page to summarise any errors a user has made.

When a user makes an error, you must show both an error summary and an error message next to each answer that contains an error.

*Example*
<div class="govcy-container govcy-p-4  govcy-br-1 govcy-br-standard govcy-mb-4">
<div class="row govcy-px-2">
    <div class="govcy-alert-error govcy-br-5 govcy-br-danger govcy-p-3">
        <h2>There is a problem</h2>
        <p class="govcy-mb-0">
            <a href="#">Enter your full name</a>
            <a href="#">Social insurance number should be 16 digit long</a>
        </p>
    </div>
</div>
</div>

*Sample HTML Code*
```html
<div class="govcy-alert-error govcy-br-5 govcy-br-danger govcy-p-3">
    <h2>There is a problem</h2>
    <p class="govcy-mb-0">
        <a href="#">Enter your full name</a>
        <a href="#">Social insurance number should be 16 digit long</a>
    </p>
</div>
```
## When to use this component
Always show an error summary when there is a validation error, even if there’s only one.

## How it works
You must:
- move keyboard focus to the error summary
- include the heading ‘There is a problem’ in English and ‘Υπάρχει κάποιο πρόβλημα’ in Greek
- link to each of the answers that have validation errors
- make sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors

## Linking from the error summary to each answer
You must link the errors in the error summary to the answer they relate to.

For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the field.

When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error.

If you do not know which field contains an error, link to the first field.

For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox.

## Where to put the error summary
Put the error summary at the top of the [main](../../styles/page_templates) (`<main>`) container. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.