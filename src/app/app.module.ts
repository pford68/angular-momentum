import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartModule } from '../cart/cart.module';
import { CartService } from '../cart/cart.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
