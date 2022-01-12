import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/features/login/services/login.service';
import { AccountStore } from 'app/features/login/store/account.store';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private readonly loginService: LoginService,
    private readonly accountStore: AccountStore,
    private router: Router
  ) {}

  authenticate() {
    this.loginService
      .authenticate(this.username, this.password)
      .pipe(tap((account) => this.accountStore.setAccount(account)))
      .subscribe(() => {
        this.router.navigate(['pets']);
      });
  }
}
