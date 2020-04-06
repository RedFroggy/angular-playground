import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import 'core-js/es/reflect';
import { SharedLibsModule } from './shared/shared-libs.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  let httpTestingController: HttpTestingController;

  const createComponent = createComponentFactory({
    imports: [
      SharedModule.forRoot(),
      TranslateModule.forRoot(),
      SharedLibsModule,
      RouterTestingModule,
      HttpClientTestingModule,
    ],
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should create the app', () => {
    expect(component).toBeDefined();

    httpTestingController.expectOne('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
  });

  it(`should have as title 'angular-cli'`, () => {
    expect(component.title).toEqual('angular-starter-kit');

    httpTestingController.expectOne('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
  });
});
