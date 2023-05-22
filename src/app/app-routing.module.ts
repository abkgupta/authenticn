import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { PreferencesCheckerGuard } from './preferences-checker.guard';
import { UnsavedGuard } from './unsaved.guard';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminAccessGuard } from './admin-access.guard';
// import { AuthService } from './shared/auth.service';

const routes: Routes = [
  // {path:'', redirectTo:'login',pathMatch:'full'},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', 
  component: RegisterComponent,
   canDeactivate: [UnsavedGuard] },
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
    canActivate: [AuthGuard],
   
  },
  {
    path: 'admin',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent,
        // canActivate: [SuperAdminGuard]
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          {
            path: 'manage',
            component: AdminManageComponent,
          },
          {
            path: 'edit',
            component: AdminEditComponent,
          },
          {
            path: 'delete',
            component: AdminDeleteComponent,
          }
        ]
      }
    
    ]
  },
  { path: 'preferences', 
  canLoad: [PreferencesCheckerGuard],
  loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule)
 },       // for lazy loading.

  { path: '**', component: RegisterComponent }    // wild card route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
