import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './products/categories/category/category.component';
import { ProductComponent } from './products/product/product.component';
import { SearchComponent } from './products/search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'cart', component: CartComponent, canActivate: [] },
  {
    path: 'product/:id',
    component: ProductComponent,
    // resolve: { product: ProductResolver },
  },
  { path: 'search/:query', component: SearchComponent },
  { path: 'category/:name', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
