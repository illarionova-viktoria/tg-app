import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IProduct} from "../../services/products.service";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnChanges, OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: IProduct[];

    ngOnChanges(changes: SimpleChanges): void {

    }

    ngOnInit(): void {

    }


}
