import { Component } from '@angular/core';

import { Treball } from './models/treball';
import { FirebasedbService } from './services/firebasedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public treballs: Treball[] = [];
  public treball: Treball;
  public mode: string;
  public collectionFilter: string;

  constructor(private firebd: FirebasedbService) {
    this.treball = new Treball();
    this.mode = "add";

    this.firebd.getTreballs().subscribe(
      (originalTreballs: Treball[]) => {
        this.treballs = originalTreballs;
        console.log(this.treballs);
      }
    );
  }

  clearTreball() {
    this.mode = "add";
    this.treball = new Treball();
  }

  addTreball() {
    this.firebd.addTreball(this.treball);
  }

  deleteTreball(i: number) {
    this.firebd.deleteTreball(this.treballs[i].id);
  }

  loadCurrentTreball(i: number) {
    this.mode = "update"
    this.treball = this.treballs[i];
  }

  updateTreball() {
    this.firebd.updateTreball(this.treball.id, this.treball);
  }
}
