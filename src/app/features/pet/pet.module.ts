import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PetListComponent } from 'app/features/pet/pet-list.component';
import { RouterModule } from '@angular/router';
import { PETS_ROUTES } from 'app/features/pet/pet.route';
import { PetsStore } from 'app/features/pet/store/pets.store';
import { PetComponent } from 'app/features/pet/pet.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(PETS_ROUTES)],
  providers: [PetsStore],
  declarations: [PetListComponent, PetComponent],
  exports: [PetListComponent, PetComponent],
})
export class PetModule {}
