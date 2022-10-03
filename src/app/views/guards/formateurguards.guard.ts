import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAdminService } from 'src/app/services/auth-admin.service';

@Injectable({
  providedIn: 'root'
})
export class FormateurguardsGuard implements CanActivate {
  
  constructor(private as:AuthAdminService,private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    return new Promise((resolve,reject)=>{
      if (this.as.FormateurisLoggedIN()==true)
      {
        resolve(true)
      }
      else{
      this.route.navigate(['/'],{queryParams:{returnUrl:state.url}})
      resolve(false)
    }
    })
  
  
  }


  
}
