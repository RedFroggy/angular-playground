import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { PetModel } from './features/pet/models/pet.model';
import { Router } from '@angular/router';
import { AccountModel } from 'app/features/login/models/account.model';
import { AccountRepository } from 'app/features/login/repository/account.repository';
import { APP_VERSION } from 'app/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  account: AccountModel;
  authenticated: boolean;
  title = 'angular-starter-kit';
  locale: string;
  pets: PetModel[] = [];

  constructor(
    private readonly translateService: TranslateService,
    private readonly accountRepository: AccountRepository,
    private readonly router: Router
  ) {
    this.locale = environment.defaultLanguage;
    this.translateService.use(environment.defaultLanguage);

    // Configure translation for app
    registerLocaleData(localeEn, 'en');

    translateService.setDefaultLang(environment.defaultLanguage);

    this.accountRepository.getAccount().subscribe((account) => (this.account = account));
    this.accountRepository.hasAccount().subscribe((authenticated) => (this.authenticated = authenticated));
  }

  ngOnInit(): void {
    if (!environment.production) {
      window.app = APP_VERSION;
    }
  }

  changeLocale(): void {
    this.translateService.use(this.locale);
  }

  logout(): void {
    this.accountRepository.removeAccount();
    this.router.navigate(['login']);
  }
}
