import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Treball } from '../models/treball';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  //CRUD = Create - Read - Update - Delete

  constructor(private firestore: AngularFirestore) { }

  getTreballs(): Observable<Treball[]> {
    return this.firestore.collection<Treball>("treballs").valueChanges({idField: 'id'});
    //select * from treballs;
  }

  addTreball(treball: Treball) {
    this.firestore.collection("treballs").add({
      name: treball.name,
      image: treball.image,
      num: treball.num,
      descripcio: treball.descripcio
    });
  }

  deleteTreball(id: string) {
    this.firestore.collection("treballs").doc(id).delete();
  }

  updateTreball(id: string, treball: Treball) {
    this.firestore.collection("treballs").doc(id).update(treball);
  }
}
