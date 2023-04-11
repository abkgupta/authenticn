import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { PreferencesCheckerGuard } from './preferences-checker.guard';
// import { AuthService } from './shared/auth.service';

const routes: Routes = [
  // {path:'', redirectTo:'login',pathMatch:'full'},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // {path:'home',component:HomeComponent}
  // {
  //     component: LoginComponent,
  //     path:'login'
  //   },
  //   {
  //     component: RegisterComponent,
  //     path:'register'
  //   },
  // {
  //   component: HomeComponent,
  //   path:'home'
  // }
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'preferences', 
  canLoad: [PreferencesCheckerGuard],
  loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
