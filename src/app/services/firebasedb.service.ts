import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Funko } from '../models/funko';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  //CRUD = Create - Read - Update - Delete

  constructor(private firestore: AngularFirestore) { }

  getFunkos(): Observable<Funko[]> {
    return this.firestore.collection<Funko>("funkos").valueChanges({idField: 'id'});
    //select * from funkos;
  }

  addFunko(funko: Funko) {
    this.firestore.collection("funkos").add({
      name: funko.name,
      image: funko.image,
      num: funko.num,
      collection: funko.collection
    });
  }

  deleteFunko(id: string) {
    this.firestore.collection("funkos").doc(id).delete();
  }

  updateFunko(id: string, funko: Funko) {
    this.firestore.collection("funkos").doc(id).update(funko);
  }

  getFunkosByCollection(collection: string): Observable<Funko[]> {
    return this.firestore.collection<Funko>("funkos", ref => this.queryByCollection(collection, ref)).valueChanges({idField: 'id'});
  }

  private queryByCollection(collection: string, ref: any) {
    console.log(collection);
    return ref.where("collection", "==", collection);
  }
}
