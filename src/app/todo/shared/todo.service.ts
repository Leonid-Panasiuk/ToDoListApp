import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { from } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList : AngularFireList<any>;
  constructor(private firebasedb : AngularFireDatabase) { }

  getToDoList () {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

addTitel(title : string) {
  this.toDoList.push ({
    title : title,
    isChecked : false
  });
}  

checkOrUncheckTitle($key: string, flag: boolean) {
  this.toDoList.update($key, {isChecked: flag});
}

  removeTitle($key : string) {
    this.toDoList.remove($key);
  }

}
