import { Routes } from '@angular/router';
import {ShopsComponent} from "./pages/shops/shops.component";
import {FeedbackComponent} from "./pages/feedback/feedback.component";
import {ProductComponent} from "./pages/product/product.component";

export const routes: Routes = [
  { path: '', component: ShopsComponent, pathMatch: 'full' },
  { path: 'feedback', component: FeedbackComponent},
  { path: 'product/:id', component: ProductComponent}
];
