/**
 * Cart Module:  main application module.
 */

'use strict';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CartComponent} from './cart.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [CartComponent],          // I had to do this in order to use <qe-cart> in the app.component's template
    declarations: [CartComponent],
    bootstrap: [CartComponent]         // Bootstrap takes a Component, not a module
})
export class CartModule {
}
