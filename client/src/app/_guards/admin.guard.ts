import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user.roles.includes('Admin') || user.roles.includes('Moderator')) {
          return true;
        }
<<<<<<< HEAD
        else
        {
          this.toastr.error('You cannot enter this area!');
          return false;
        }
        
=======
        this.toastr.error('You cannot enter this area!');
>>>>>>> f88f9dfc7603d8612538a25476ab85304ebc32d7
      })
    );
  }
  
}
