import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import 'core-js/es/reflect';
import { SharedLibsModule } from './shared/shared-libs.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AccountStore } from 'app/features/login/store/account.store';
import { AccountFixture } from '../test/fixtures/account.fixture';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  let httpTestingController: HttpTestingController;
  let accountStore: AccountStore;

  const createComponent = createComponentFactory({
    imports: [TranslateModule.forRoot(), SharedLibsModule, RouterTestingModule, HttpClientTestingModule],
    providers: [AccountStore],
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    httpTestingController = TestBed.inject(HttpTestingController);
    accountStore = TestBed.inject(AccountStore);
  });

  afterEach(() => httpTestingController.verify());

  it('should create the app', (done) => {
    expect(component).toBeDefined();

    jest.spyOn(accountStore, 'getAccount').mockReturnValue(of(AccountFixture.anAccount()));
    accountStore.getAccount().subscribe((account) => {
      expect(account).toEqual(AccountFixture.anAccount());
      done();
    });
  });

  it(`should have as title 'angular-cli'`, () => {
    expect(component.title).toEqual('angular-starter-kit');
    jest.spyOn(accountStore, 'getAccount').mockReturnValue(of(AccountFixture.anAccount()));
  });

  it('should change locale', () => {
    jest.spyOn(accountStore, 'getAccount').mockReturnValue(of(AccountFixture.anAccount()));

    const translateService: TranslateService = TestBed.inject(TranslateService);
    jest.spyOn(translateService, 'use').mockReturnValue(of(null));

    component.changeLocale();
    expect(translateService.use).toHaveBeenCalled();
  });
});
