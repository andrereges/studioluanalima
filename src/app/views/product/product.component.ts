import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  categories: Array<Category> = [];
  products: Array<Product> = [];
  categorySelected: string = '';
  textSearch: string = '';

  formControl = new FormControl('');

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  clearInput(): void {
   this.textSearch = ''
  }

  getProducts(): void {
    this.productService.getAll()
      .subscribe(products => this.products = products);

    this.products.forEach(
      product => product.categories.forEach(
        category => {
          if (!this.alreadyExists(category))
            this.categories.push(category)
        })
    )
  }

  private alreadyExists(categoryParameter: Category): boolean {
    return !!this.categories.find(category => category.id == categoryParameter.id)
  }

}
