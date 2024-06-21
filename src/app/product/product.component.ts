import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productDetails?: any;

  constructor(
    private route: ActivatedRoute,
    private productSerivce: ProductsService
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.params['id'];
    this.productSerivce.getProductDetailById(productId).subscribe((data) => {
      this.productDetails = data;
    });
  }
}
