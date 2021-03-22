import { Component } from '@angular/core';

import { Funko } from './models/funko';
import { FirebasedbService } from './services/firebasedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public funkos: Funko[] = [];
  public funko: Funko;
  public mode: string;
  public collectionFilter: string;

  constructor(private firebd: FirebasedbService) {
    this.funko = new Funko();
    this.mode = "add";

    this.firebd.getFunkos().subscribe(
      (originalFunkos: Funko[]) => {
        this.funkos = originalFunkos;
        console.log(this.funkos);
      }
    );
  }

  clearFunko() {
    this.mode = "add";
    this.funko = new Funko();
  }

  addFunko() {
    this.firebd.addFunko(this.funko);
  }

  deleteFunko(i: number) {
    this.firebd.deleteFunko(this.funkos[i].id);
  }

  loadCurrentFunko(i: number) {
    this.mode = "update"
    this.funko = this.funkos[i];
  }

  updateFunko() {
    this.firebd.updateFunko(this.funko.id, this.funko);
  }

  searchFunkos() {
    this.firebd.getFunkosByCollection(this.collectionFilter).subscribe(
      (orginalFunkos: Funko[]) => {
        this.funkos = orginalFunkos;
      }
    );
  }
}
