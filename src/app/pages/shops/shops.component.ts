import {Component, OnInit} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import {ProductType, ProductsService} from "../../services/products.service";
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.scss'
})
export class ShopsComponent implements OnInit {
  // telegram = inject(TelegramService);
  // products = inject(ProductsService);

  skill;
  intensive;
  course;

  constructor(private products: ProductsService, private telegram: TelegramService,private route: ActivatedRoute) {
    this.telegram.BackButton?.hide();
  }


  ngOnInit(): void {
    this.skill   = this.products.byGroup['skill'];
    this.intensive = this.products.byGroup['intensive'];
    this.course = this.products.byGroup['course'];
  }

}
