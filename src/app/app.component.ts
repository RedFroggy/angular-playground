import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { PetModel } from './features/pet/models/pet.model';
import { PetService } from 'app/shared/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-starter-kit';
  locale: string;
  pets: PetModel[] = [];

  constructor(private translateService: TranslateService, private petService: PetService) {
    this.locale = environment.defaultLanguage;
    this.translateService.use(environment.defaultLanguage);

    // Configure translation for app
    registerLocaleData(localeEn, 'en');

    translateService.setDefaultLang(environment.defaultLanguage);
  }

  ngOnInit() {
    // Find pets and transform to PetModel
    this.petService.findPetsByStatus('available').subscribe((pets: PetModel[]) => (this.pets = pets));
  }

  changeLocale() {
    this.translateService.use(this.locale);
  }
}
