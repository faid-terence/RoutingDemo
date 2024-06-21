import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductOfferComponent } from './product-offer/product-offer.component';
import { ProductUpdatesComponent } from './product-updates/product-updates.component';
import { AboutComponent } from './about/about.component';
import { RatingComponent } from './rating/rating.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  {
    path: 'product/:id',
    component: ProductComponent,
    children: [
      { path: '', redirectTo: 'updates', pathMatch: 'full' },
      { path: 'offers', component: ProductOfferComponent },
      { path: 'updates', component: ProductUpdatesComponent },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'rating', outlet: 'rate', component: RatingComponent },
      { path: 'feedback', outlet: 'feed', component: FeedbackComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];
