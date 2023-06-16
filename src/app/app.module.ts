import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
<<<<<<< HEAD
import { SafePipe } from './core/safe-pipe';
=======
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
<<<<<<< HEAD
    ExampleTwoComponent,
    SafePipe
=======
    ExampleTwoComponent
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
