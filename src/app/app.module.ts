import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LimitPipe } from './utils/pipes/limit.pipe';
import { DealsComponent } from './products/deals/deals.component';
import { SearchComponent } from './products/search/search.component';
import { ProductSearchComponent } from './products/product-search/product-search.component';
import { RatingComponent } from './products/rating/rating.component';
import { ReviewComponent } from './products/review/review.component';
import { PopularComponent } from './products/popular/popular.component';
import { CategoryComponent } from './products/categories/category/category.component';
import { MainCategoriesComponent } from './products/categories/main-categories/main-categories.component';
import { ProductComponent } from './products/product/product.component';
import { ProductCardComponent } from './products/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LimitPipe,
    CategoryComponent,
    MainCategoriesComponent,
    SearchComponent,
    ProductSearchComponent,
    RatingComponent,
    ReviewComponent,
    PopularComponent,
    DealsComponent,
    ProductComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
