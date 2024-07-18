import { Component } from '@angular/core';
import { ProductElementComponent } from "./inner/product-element/product-element.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductElementComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
