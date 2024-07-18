import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-element',
  standalone: true,
  imports: [],
  templateUrl: './product-element.component.html',
  styleUrl: './product-element.component.scss'
})
export class ProductElementComponent {
  @Input() data:any;
}
