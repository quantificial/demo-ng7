# demo-ng7

package.json - node dependencies
package-lock.json - record others dependencies version

# https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example

Angular Components
- HTML Template
- The Logic in the typescript
- Styling in SCSS and CSS


# global install angular framework and cli
npm install -g @angular/cli

# create new project
ng new ng7-pre



# define route
- app-routeing.module.ts

# control css

[class.colorful]="[true|false] value"

# control mutiple css
```
<h1 [ngClass]="{
  'gray': h1Style,
  'large': !h1Style
}">Home</h1>
```
# change css directly
```
<h1 [style.color]="h1Style ? 'gray': 'black'">Home</h1>
```

# change css mutiple
```
<h1 [ngStyle]="{
  'color': h1Style ? 'gray' : 'black',
  'font-size': !h1Style ? '1em' : '4em'
}">Home</h1>
```

# define service
create service such as DataService

import it when need to use
```
import { DataService } from '../data.service';
```

initialize in the constructor
```
constructor(private data: DataService) { }
```

# using form
```
import { ReactiveFormsModule } from '@angular/forms';
```

define the form
```
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
```

# using css
need to note the difference between inline and inline-block

Inline elements:

respect left & right margins and padding, but not **top & bottom**
cannot have a **width and height** set
allow other elements to sit to their left and right.
see very important side notes on this here.

Block elements:

respect all of those
**force a line break** after the block element
acquires full-width if width not defined

Inline-block elements:

allow other elements to sit to their left and right
**respect top & bottom** margins and padding
**respect height and width**
