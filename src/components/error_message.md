---
"title" : "Error Message"
date: 2022-02-01 00:01:01Z
---
Show an error message when there is a validation error. In the error message explain what went wrong and how to fix it.

## When to use this component
Show an error message next to the field and in the [error summary](../error_summary) when there is a validation error.

## When not to use this component
Do not use error messages to tell a user that they are not eligible or do not have permission to do something. Or to tell them about a lack of capacity or other problem the user cannot fix - because the problem is with the service rather than with the information the user has provided.

Instead, take the user to a page that explains the problem (for example, telling them why they’re not eligible) and provides useful information about what to do next.

There are separate patterns for:
- problem with the service(LINK) pages
- page not found(LINK) pages

## How it works

For each error:
- put the message in red after the question text and hint text
- use a red border to visually connect the message and the question it belongs to
- if the error relates to a specific field within the question, give it a red border and refer to that field in the error message - for example: “you must enter a year”

To help screen reader users, the error message component includes a hidden ‘Error:’ before the error message. These users will hear, for example, `<span class="DSF-visually-hidden"> Error:</span> The date your passport was issued must be in the past`.

Summarize all errors at the top of the page the user is on using an [error summary](../error_summary).

*Examples*
<div class="govcy-container govcy-p-4  govcy-br-1 govcy-br-light govcy-mb-4">
<form action="" class="govcy-form">
    <div class="govcy-form-control govcy-form-control-error">
        <label class="govcy-label" for="input">Label</label>
        <span class="govcy-input-error-msg">There is an error</span>
        <input type="text" class="govcy-text-input govcy-text-input-error" placeholder="input">
    </div>
    <fieldset class="govcy-fieldset">
        <div class="govcy-form-control govcy-form-control-error">
            <label class="govcy-label govcy-mb-1" for="">Date of birth</label>
            <span class="govcy-input-error-msg govcy-mb-3">There is an error</span>
            <div class="govcy-d-flex">
                <div class="govcy-d-block">
                    <label class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2" for="">Day</label>
                    <input type="text" class="govcy-text-input govcy-text-input-error govcy-text-input-char_3 govcy-p-2" placeholder="" maxlength="2">
                </div>
                <div class="govcy-d-block govcy-ml-2">
                    <label class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2" for="">Month</label>
                    <input type="text" class="govcy-text-input govcy-text-input-error govcy-text-input-char_3 govcy-p-2" placeholder="" maxlength="2">
                </div>
                <div class="govcy-d-block govcy-ml-2">
                    <label class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2" for="">Year</label>
                    <input type="text" class="govcy-text-input govcy-text-input-error govcy-text-input-char_6 govcy-p-3" placeholder="" maxlength="4">
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset class="govcy-fieldset">
        <legend class="govcy-legend">Legend</legend>
        <div class="govcy-form-control govcy-form-control-error">
            <span class="govcy-input-error-msg">There is an error</span>
            <label class="govcy-checkbox">Option 1
                <input class="govcy-checkbox-input" type="checkbox">
                <span class="govcy-tickbox" tabindex="1"></span>
            </label>
            <label class="govcy-checkbox">Option 2
                <input class="govcy-checkbox-input" type="checkbox">
                <span class="govcy-tickbox" tabindex="2"></span>
            </label>
        </div>
    </fieldset>
    <fieldset class="govcy-fieldset">
        <legend class="govcy-legend">Legend</legend>
        <div class="govcy-form-control govcy-form-control-error">
            <span class="govcy-input-error-msg">Mandatory field</span>
            <label class="govcy-radio-btn">Option 1
                <input class="govcy-radio-input" type="radio" name="radio">
                <span class="govcy-radio" tabindex="1"></span>
            </label>
            <label class="govcy-radio-btn">Option 2
                <input class="govcy-radio-input" type="radio" name="radio">
                <span class="govcy-radio" tabindex="2"></span>
            </label>
            <label class="govcy-radio-btn">Option 3
                <input class="govcy-radio-input" type="radio" name="radio">
                <span class="govcy-radio" tabindex="3"></span>
            </label>
        </div>
    </fieldset>
    <div class="govcy-form-control govcy-form-control-error govcy-pb-1">
        <label class="govcy-label govcy-mb-1" for="">Upload a file</label>
        <span class="govcy-input-error-msg govcy-mb-3">There is an error</span>
        <input class="govcy-file-upload" type="file" id="" name="">
    </div>
</form>
</div>

## Be clear, specific and consistent  
Describe what has happened and tell them how to fix it. The message must be in plain language, use positive language and get to the point.

Do not use:
- technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’
- words like ‘forbidden’, ‘illegal’, ‘you forgot’ and ‘prohibited’
- ‘please’ because it implies a choice
- ‘sorry’ because it does not help fix the problem
- ‘valid’ and ‘invalid’ because they do not add anything to the message
- humourous, informal language like ‘oops’

Error messages should make sense. Avoid general messages like:
- ‘An error occurred’
- ‘Answer the question’
- ‘Select an option’
- ‘Fill in the field’
- ‘This field is required’

Describe what went wrong in your message and help the user understand what has happened and how to fix it. For example, text fields may be:
- empty
- too long
- too short
- using characters that are not allowed
- in the wrong format

Be consistent in your messages and use the question or form label in the error to provide context. For example, ‘Enter how many hours you work a week’ for ‘How many hours do you work a week?’. Use the same message next to the field and in the [error summary](../error_summary).

## Use instructions and descriptions

Some errors work better as instructions and some work better as descriptions. For example:

- ‘Enter your first name’ is clearer, more direct and natural than ‘First name must have an entry’
- ‘Enter a first name that is 35 characters or fewer’ is wordier, less direct and natural than ‘First name must be 35 characters or fewer’
- ‘Enter a date after 31 August 2017 for when you started the course’ is wordier, less direct and natural than ‘Date you started the course must be after 31 August 2017’

Use both instructions and descriptions, but use them consistently. For example, use an instruction for empty fields like ‘Enter your name’, but a description like ‘Name must be 35 characters or fewer’ for entries that are too long
