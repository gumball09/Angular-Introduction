# Angular Basics

### THIS REPO IS A PLAYGROUND FOR TRYING OUT ANGULAR THE FIRST TIME!!!
### What I have learnt so far:

### MISC
-`<ng-template></ng-template>`: templated block\
-`#name`: '#' with a custom name creates a `reference` to the current el\
 
### DIRECTIVES 
-`*ngFor`: iteration > render multiple data\
-`*ngIf`: render conditions (**ngIf; [then]; [else]**)\
-`[ngClass]`: apply styles to an el
  - should only be used for conditional stylings.\
  - Good practice: Pass in a func() defined in the .ts file returning either a string, an array of strings or a configuration object\
  - NOT MEANT TO REPLACE THE TRADITIONAL CSS STYLING (CONSTANT STYLES TO AN ELEMENT SHOULD BE APPLIED      THROUGH NORMAL CSS STYLING)

### DECORATIVES
-`@Input()`decorative: to get the custom properties passed into an el\
-`@Output()` decorative: to print something custom to the console\
-`EventEmitter`: used along with `@Output`
