import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountStore } from 'app/features/login/store/account.store';

@Injectable()
export class CanAuthenticationGuard implements CanActivate {
  constructor(protected readonly router: Router, private readonly accountStore: AccountStore) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.accountStore
        .hasAccount()
        .pipe()
        .subscribe((authenticated) => {
          console.info('Already authenticated, skip login page', authenticated);
          if (!authenticated) {
            console.warn('Not authenticated, please log in', authenticated);
            this.router.navigate(['login']);
            reject(true);
          } else {
            resolve(true);
          }
        });
    });
  }
}
