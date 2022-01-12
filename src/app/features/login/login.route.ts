import { CanActivate, Routes } from '@angular/router';
import { LoginComponent } from 'app/features/login/login.component';
import { Injectable } from '@angular/core';
import { AccountStore } from 'app/features/login/store/account.store';

@Injectable()
export class CanLoginGuard implements CanActivate {
  constructor(private accountStore: AccountStore) {}
  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.accountStore
        .hasAccount()
        .pipe()
        .subscribe((authenticated) => {
          if (authenticated) {
            reject(true);
          } else {
            resolve(true);
          }
        });
    });
  }
}

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    canActivate: [CanLoginGuard],
    component: LoginComponent,
  },
];
