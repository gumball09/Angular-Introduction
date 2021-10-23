# Angular Basics

### THIS REPO IS A PLAYGROUND FOR TRYING OUT ANGULAR THE FIRST TIME!!!
### What I have learnt so far:

### MISC
-`<ng-template></ng-template>`: templated block\
-`#name`: '#' with a custom name creates a `reference` to the current el
 
### DIRECTIVES 
-`*ngFor`: iteration > render multiple data\
-`*ngIf`: render conditions (**ngIf; [then]; [else]**)\
-`[ngClass]`: apply styles to an el
  - should only be used for conditional stylings.
  - Good practice: Pass in a func() defined in the `.ts` file returning either a `string, an array of strings or a configuration object`
  - NOT MEANT TO REPLACE THE TRADITIONAL CSS STYLING (CONSTANT STYLES TO AN ELEMENT SHOULD BE APPLIED     
   THROUGH NORMAL CSS STYLING)\
  - `[ngClass]`: only used for **css state classes** to indicate the presence of a given state in the 
  component
<br/>

-`[ngStyle]`: (similar to `[ngClass]`) to set a particular style to an el 
  - **`[ngClass]` & `[ngStyle]` should only be used for DYNAMIC STYLING**
<br/>

-`[ngSwitch]` & `*ngSwitchCase` & `*ngSwitchDefault`: conditional rendering based on different cases
  - `[ngSwitch]`: used in the parent element, takes an expression as parameter (i.e `[ngSwitch]="course.description"`)
  - `*ngSwitchCase`: used in the child element, takes a string as parameter (**IF matches the condition -> the element will be rendered**)
  - `*ngSwitchDefault`: used in child element, NO PARAMETER, render the custom default value if no conditions met

### DECORATIVES
-`@Input()`decorative: to get the custom properties passed into an el\
-`@Output()` decorative: to print something custom to the console\
-`EventEmitter`: used along with `@Output`

### BUILT-IN PIPES "|"
Templated mechanism to transform data and display it in another form\
**STRING FORMAT**\
-`date`: display a date (with default or custom format)
  - `<div>{{ startDate | date: 'MM/dd/yyyy' }}</div>`: get the startDate and pipe to `date` fn, which takes a string as format paramter (optional)
<br/>

-`titlecase`: display a string with the first letter capitalized for each word
  - `<div>{{title | titlecase }}</div>`
<br/>

-`uppercase`: display a string with all letters IN UPPER CASE
  - `<div>{{title | uppercase }}</div>`
<br/>

-`lowercase`: display a string with all letters IN LOWER CASE
  - `<div>{{title | lowercase }}</div>`
<br/>

**NUMBERS**\
-`number`: takes a string as parameter which defines the format **numberOfIntegerDigits.minFraction-maxFraction**
  -`<div>{{ price | number: '3.3-5' }}</div>`: format as 3 integer digits, minimum of 3 and maximum of 5 decimals
