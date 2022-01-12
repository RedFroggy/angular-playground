import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { PetModel } from './features/pet/models/pet.model';
import { Router } from '@angular/router';
import { AccountModel } from 'app/features/login/models/account.model';
import { AccountStore } from 'app/features/login/store/account.store';
import { APP_VERSION } from 'app/app.constants';
import { StoreUtil } from 'app/shared/store/store-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  account: AccountModel;
  title = 'angular-starter-kit';
  locale: string;
  pets: PetModel[] = [];

  constructor(
    private readonly translateService: TranslateService,
    private readonly accountStore: AccountStore,
    private readonly router: Router
  ) {
    this.locale = environment.defaultLanguage;
    this.translateService.use(environment.defaultLanguage);

    // Configure translation for app
    registerLocaleData(localeEn, 'en');

    translateService.setDefaultLang(environment.defaultLanguage);

    this.accountStore.getAccount().subscribe((account) => (this.account = account));
  }

  ngOnInit(): void {
    if (!environment.production) {
      StoreUtil.enableDevTools();
      window.app = APP_VERSION;
    }
  }

  changeLocale(): void {
    this.translateService.use(this.locale);
  }

  logout(): void {
    StoreUtil.clearStores();
    this.router.navigate(['login']);
  }
}
