import { mount } from 'products/ProductIndex';
import {mountCart } from 'cart/CartIndex';

mount(document.querySelector('#dev-products'))
mountCart(document.querySelector('#dev-cart'));