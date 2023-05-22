import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component: RegisterComponent){
      if(component.isDirty)
      {
        return window.confirm("You have unsaved changes are u sure! ")
      }
    return true; 
  }
  
}
