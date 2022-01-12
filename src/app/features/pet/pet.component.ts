import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'app/shared/api';
import { map, Observable } from 'rxjs';
import { AccountStore } from 'app/features/login/store/account.store';
import { PetsStore } from 'app/features/pet/store/pets.store';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent {
  pet: Pet;
  accountFullName$: Observable<string>;
  constructor(
    route: ActivatedRoute,
    private readonly petsStore: PetsStore,
    private readonly accountStore: AccountStore
  ) {
    route.params.subscribe((params) => {
      if (params.id) {
        this.petsStore.findById(params.id).subscribe((pet) => (this.pet = pet));
      }
    });

    this.accountFullName$ = accountStore
      .getAccount()
      .pipe(map((account) => `${account.firstName} ${account.lastName}`));
  }
}
