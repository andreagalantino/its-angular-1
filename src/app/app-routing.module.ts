import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/userProfile.component';
import { DrinkComponent } from './pages/drink/drink.component';

const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'userProfile', component: UserProfileComponent },
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
