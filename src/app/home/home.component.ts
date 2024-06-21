import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productService: ProductsService) {}

  productList: any;

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProductList().subscribe((res) => {
      this.productList = res;
      console.log(this.productList);
    });
  }
}
