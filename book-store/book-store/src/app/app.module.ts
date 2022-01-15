import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './auth/auth/components/login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './auth/auth/components/signup/signup.component';

// Step 1: Define Routes/Paths
const routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
]

// Components in this module.
@NgModule({
  declarations: [
    AppComponent
  ],
  // Imports modules it depends on
  imports: [
    BrowserModule,
    AuthModule,
    // Make module aware of routing paths.
    RouterModule.forRoot(routes),
    HomeModule
  ],
  providers: [],
  // Entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
