# Notes on Design System

- `checkbox` and `radio` `hint` under the `legend` doesn't work 
- `textarea` remove default height:44px;
- `conditional radio` accessibility issues
    Users are not always notified when a conditionally revealed question is shown or hidden. This fails  [WCAG 2.1 success criterion 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html).

    More on [https://design-system.service.gov.uk/components/radios](https://design-system.service.gov.uk/components/radios)
- `table` captions dont work
- `table` make sure `table-responsive` is included in the design system
- `date` use html5 attributes `<input class="govcy-text-input govcy-text-input-error govcy-text-input-char_6 govcy-p-3" placeholder="" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric">`
- `form` in every example where there is a form use the `novalidate` attribute, for example `<form action="" class="govcy-form" novalidate>`
- `Telephone` Google’s [libphonenumber](https://github.com/googlei18n/libphonenumber) library can validate telephone numbers from most countries.
