import { Component, OnInit } from '@angular/core';
import { Pet, PetService } from 'app/shared/api';
import { PetsStore } from 'app/features/pet/store/pets.store';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
})
export class PetListComponent implements OnInit {
  pets: Pet[];
  status: 'available' | 'pending' | 'sold' = 'pending';
  constructor(private readonly petsStore: PetsStore, private readonly petService: PetService) {}

  ngOnInit(): void {
    this.loadPets();
  }

  selectStatus(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.petService
      .findPetsByStatus(this.status)
      .pipe(tap((pets) => this.petsStore.setPets(this.status, pets)))
      .subscribe((pets) => (this.pets = pets));
  }
}
