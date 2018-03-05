import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';

import { GenresComponent } from "./genres/genres.component";
import { MoviesComponent } from "./movies/movies.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthService } from "./auth/auth.service";
import { GenreService } from "./genres/genre.service";
import { MovieService } from "./movies/movie.service";



@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    MoviesComponent,
    MoviesListComponent,
    LoginFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [
    GenreService,
    MovieService,
    AuthService,
  ],
  entryComponents: [
    LoginFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
