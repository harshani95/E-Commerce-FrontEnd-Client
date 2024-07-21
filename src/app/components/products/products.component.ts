import { Component, OnInit } from '@angular/core';
import { ProductElementComponent } from "./inner/product-element/product-element.component";
import { debounceTime } from 'rxjs';
import { ForexService } from '../../service/forex/forex.service';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import { ProductService } from '../../service/product/product.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductElementComponent,
    MatPaginator,
    ReactiveFormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit{
  searchText = '';
  page: any = 0;
  size: any = 1;
  count=0;
  dataList:any[]=[];
  rate: any = 0;

  searchForm: FormGroup = new FormGroup({
    text: new FormControl('')
  });

  constructor(private matDialog: MatDialog,
    private productService: ProductService,
    private forexService: ForexService) {
  }

  ngOnInit(): void {

    this.forexService.exchange('USD', 'LKR').subscribe((data: { result: { LKR: any; }; }) => {
      this.rate = data?.result?.LKR;
      this.loadAllProducts();
    });

    this.searchForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((data: { text: string; }) => {
        this.searchText = data.text;
        this.loadAllProducts();
      })
  }

  private loadAllProducts() {
    this.productService.search(this.page, this.size, this.searchText).subscribe((response: { data: { dataList: any[]; count: number; }; }) => {
      console.log(response);
      this.dataList = response.data?.dataList;
      this.count = response.data?.count;
    });
  }

  getServerData(data: PageEvent) {
    this.page = data?.pageIndex;
    this.size = data?.pageSize;
    this.loadAllProducts();
  }

}
