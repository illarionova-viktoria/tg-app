import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // получаем динамический айди из адресной строки
    const id = this.route.snapshot.paramMap.get('id');
    // получаем конкретный продукт из сервиса
    this.product = this.products.getById(id);
    this.goBack = this.goBack.bind(this);
  }

  ngOnInit(): void {
    this.telegram.BackButton?.show();
    this.telegram.BackButton?.onClick(this.goBack);
  }

  goBack():void {
    this.router.navigate(['/']);

  }

  ngOnDestroy(): void {
    this.telegram.BackButton?.offClick(this.goBack);
  }

}
