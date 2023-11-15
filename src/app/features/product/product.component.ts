import { Product } from '../../core/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: { count: 0, rate: 0 },
    title: '',
  };
  constructor(public activatedRoute: ActivatedRoute) {}
}
