/**
 * Controller for the shopping cart view.
 */

'use strict';
import {Component, Input} from '@angular/core';
import { CartService } from './cart.service';


@Component({
    selector: 'iw-cart',
    templateUrl: 'cart.component.html',
    styleUrls: [ 'cart.component.css' ],
    providers: [ CartService ]
})
export class CartComponent {
    @Input() items = [];

    constructor(service: CartService) {
        this.items = service.getAll();
    }

    remove(index: number) {
        console.log('index', index);
        this.items.splice(index, 1);
    }
}
