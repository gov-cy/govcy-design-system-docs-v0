---
title: "Grid system"
date: 2022-02-01 00:00:03Z
--- 

Use the grid system to lay out the content on your service’s pages.


The system uses 12 columns to lay out the content in the desktop viewport. The content in the columns is laid out vertically on viewports smaller than the defined [responsive breakpoint](../page_templates/#responsive-breakpoint). 

## Grid gutter and padding
Gutters are the gaps between column content, created by horizontal padding. The gutter width is **24px**. This means that each column must have the following properties, that also define their  inner content spacing:

|Propery       |Value |
|--------------|------|
|padding-right | 12px |
|padding-left  | 12px |

{.govcy-table}

## Using Grid system with GOVCY CSS

The grid system uses a series of containers, rows, and columns to layout and align content.

Use `container` classes to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.

The design system comes with two different container classes:
- `.govcy-container`, which sets to max-width at each responsive breakpoint
- `.govcy-container-fluid`, which is width: 100% at all breakpoints

Use `row` class to distinguish rows.
Use `govcy-col-*` classes to distinguish columns. Replace the asterisk (*) on the naming classes convention with a number from 1 to 12 to define how many column widths the element should have.

*Example*
<div class="govcy-container govcy-p-4 govcy-bg-info govcy-mb-4">
        <div class="row govcy-mb-2">
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-11 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-10 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-3 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-9 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-4 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-8 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-5 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-7 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-6 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-6 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-7 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-5 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-8 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-4 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-9 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-3 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-10 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-11 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-12 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-6 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-6 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-4 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-4 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-4 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-3 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-3 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-3 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-3 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-2 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
        <div class="row govcy-mb-2">
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
            <div class="govcy-col-1 govcy-bg-light govcy-br-primary govcy-br-1">col</div>
        </div>
    </div>

*Sample HTML Code*

```html
<div class="govcy-container">
    <div class="row">
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-11">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-2">col</div>
        <div class="govcy-col-10">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-3">col</div>
        <div class="govcy-col-9">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-4">col</div>
        <div class="govcy-col-8">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-5">col</div>
        <div class="govcy-col-7">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-6">col</div>
        <div class="govcy-col-6">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-7">col</div>
        <div class="govcy-col-5">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-8">col</div>
        <div class="govcy-col-4">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-9">col</div>
        <div class="govcy-col-3">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-10">col</div>
        <div class="govcy-col-2">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-11">col</div>
        <div class="govcy-col-1">col</div>
    </div>
   
    <div class="row ">
        <div class="govcy-col-12">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-6">col</div>
        <div class="govcy-col-6">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-4">col</div>
        <div class="govcy-col-4">col</div>
        <div class="govcy-col-4">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-3">col</div>
        <div class="govcy-col-3">col</div>
        <div class="govcy-col-3">col</div>
        <div class="govcy-col-3">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-2">col</div>
        <div class="govcy-col-2">col</div>
        <div class="govcy-col-2">col</div>
        <div class="govcy-col-2">col</div>
        <div class="govcy-col-2">col</div>
        <div class="govcy-col-2">col</div>
    </div>
    <div class="row ">
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
        <div class="govcy-col-1">col</div>
    </div>
 </div>
```