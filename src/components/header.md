---
"title" : "Header"
date: 2022-02-01 00:01:01Z
---
The GOV.CY header shows users that they are on GOV.CY and which service they are using.

## When to use this component
You must use the GOV.CY header at the top of every page hosted on one the gov.cy domain.

## When not to use this component
You must not use the GOV.CY header if your service is not being hosted on the gov.cy domain.

## How it works
You can only have one GOV.CY header on each page. Be consistent, have the same header in the pages of your service. 


### Default header
Use the default header if your service name is included as `<h1>` within the page. Usually this involves services that have 5 pages or fewer.

*Example* at this <a target='_blank' rel="noreferrer noopener" href='../../samples/header_default'>sample page</a>

*Sample HTML Code*
```html
<div class="govcy-container">
    <div class="row">
        <header class="govcy-header govcy-bg-primary govcy-text-white govcy-bg-primary-right">
            <a href="#" class="govcy-logo"> <img></a>
            <form class="govcy-text-white govcy-bg-primary" novalidate>     
                <select name="govcy-lang-menu" class="govcy-lang-menu govcy-text-white">
                    <option value="English">English</option>
                    <option value="Greek">Ελληνικά</option>
                </select>
            </form>
        </header>
    </div>
</div>
```

### Header with service name
Use the header with a service name if the name is not identified within the pages - this can help users understand which service they are using.

*Example* at this <a target='_blank' rel="noreferrer noopener" href='../../samples/header_with_name'>sample page</a>

*Sample HTML Code*
```html
<div class="govcy-container">
    <div class="row">
        <header class="govcy-header govcy-bg-primary govcy-text-white govcy-bg-primary-right">
            <a href="#" class="govcy-logo"> <img></a>
            <form class="govcy-text-white govcy-bg-primary" novalidate>     
                <select name="govcy-lang-menu" class="govcy-lang-menu govcy-text-white">
                    <option value="English">English</option>
                    <option value="Greek">Ελληνικά</option>
                </select>
            </form>
            <span class="govcy-service-name">Child Birth Grant</span>
        </header>
    </div>
</div>
```

### Header with service name and navigation
Use the header with navigation if you need to include basic navigation, contact or account management links.

*Example* at this <a target='_blank' rel="noreferrer noopener" href='../../samples/header_with_name_and_nav'>sample page</a>

*Sample HTML Code*
```html
<div class="govcy-container">
    <div class="row">
        <header class="govcy-header govcy-bg-primary govcy-text-white govcy-bg-primary-right">
            <a href="#" class="govcy-logo"> <img></a>
            <form class="govcy-text-white govcy-bg-primary" novalidate>     
                <select name="govcy-lang-menu" class="govcy-lang-menu govcy-text-white">
                    <option value="English">English</option>
                    <option value="Greek">Ελληνικά</option>
                </select>
            </form>
            <input class="govcy-menu-btn govcy-d-none" type="checkbox" id="menu-btn">
            <label class="govcy-menu-icon govcy-d-md-none" for="menu-btn">Menu
                <span class="material-icons govcy-my-3">arrow_drop_down</span>
            </label>
            <span class="govcy-service-name">Child Birth Grant</span>
            <ul class="govcy-menu govcy-bg-sub-menu govcy-bg-md-primary">
                <li><a class="active" href="">Guidance</a></li>
                <li><a class="active" href="">Help</a></li>
            </ul>
        </header>
    </div>
</div>
```