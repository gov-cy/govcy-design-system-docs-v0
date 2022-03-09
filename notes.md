# Notes on Design System

- `checkbox` and `radio` `hint` under the `legend` doesn't work 
- `textarea` remove default height:44px but keep it for `text-input`;
- `table` make sure `table-responsive` is included in the design system
- `date` use html5 attributes `<input class="govcy-text-input govcy-text-input-error govcy-text-input-char_6 govcy-p-3" placeholder="" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric">`
- `email` use html5 attributes ` <input class="govcy-text-input" id="email" name="email" type="email" spellcheck="false" aria-describedby="email-hint" autocomplete="email">`
- `telephone` use html5 attributes `<input class="govcy-text-input govcy-text-input-char_20" id="tel" name="tel" type="tel" spellcheck="false" aria-describedby="tel-hint" autocomplete="tel">`
- `form` in every example where there is a form use the `novalidate` attribute, for example `<form action="" class="govcy-form" novalidate>`