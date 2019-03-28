# sxy
The Sxy component library for Angular 7

Great design and thoughtful user interactions can be made better collaboratively. Sxy aims to fulfill that idea.

Check back for a new 'raw' HTML5/CSS3 version in the coming months!

## Components
At this time, only the Toggle component is available. 

### Toggle
The toggle component is a simple iOS style switch, that emits the checked value back to the implementing component. It is made from pure SCSS and HTML, with the exception of the Angular emitter. 

Include it in your Angular 7 application by adding `import { SxyModule } from 'sxy';` before `@NgModule` and `SxyModule` to your `imports:[]` section within your `src\app\app.module.ts` file. 

So you should wind up with an app.module.ts file that looks like:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SxyModule } from 'sxy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SxyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
```

You should then be able to add it to your component with `<sxy-toggle></sxy-toggle>` after doing a simple `import { ToggleComponent } from 'sxy'`.

Enjoy!