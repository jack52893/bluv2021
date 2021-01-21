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
import { DealsComponent } from './deals/deals.component';
import { CategoriesComponent } from './categories/categories.component';
import { PopularComponent } from './popular/popular.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RatingComponent } from './rating/rating.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { LimitPipe } from './utils/pipes/limit.pipe';
import { ProductSearchComponent } from './product-search/product-search.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DealsComponent,
    CategoriesComponent,
    PopularComponent,
    ProductCardComponent,
    RatingComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    ReviewComponent,
    ProductItemComponent,
    LimitPipe,
    ProductSearchComponent,
    SearchComponent
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
