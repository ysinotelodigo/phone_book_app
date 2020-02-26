import { Injectable } from '@angular/core';
import {Contact} from 'src/app/contact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  private list: Contact[] = [
    {position: 1, name: 'Yo', number: "666123123", type: 'M'},
    {position: 2, name: 'Ricardo', number: "916241234", type: 'L'},
    {position: 3, name: 'Elena', number: "666783203", type: 'M'},
    {position: 4, name: 'Ana', number: "666987343", type: 'M'},
    {position: 5, name: 'Mónica', number: "916247632", type: 'L'},
    {position: 6, name: 'Lize', number: "916248833", type: 'L'},
    {position: 7, name: 'Andrés', number: "666213883", type: 'M'},
    {position: 8, name: 'Andrea', number: "666878888", type: 'M'},
    {position: 9, name: 'Teresa', number: "666898767", type: 'M'},
    {position: 10, name: 'Mohammad', number: "666765567", type: 'M'},
    {position: 11, name: 'Judith', number: "916249898", type: 'L'},
  ];

  public getAll():  Observable<Contact[]>{
    return of(this.list);
  }

  public get(p:number) : Observable<Contact> {
    return of(this.list.find(c => c.position === p));
  }

  public save(contact:Contact): void{
    if(contact.position != undefined){
      let con: Contact = this.list.find(x => x.position === contact.position);
      let index = this.list.indexOf(con);

      if (~index) {
        this.list[index] = contact;
      }
    }else{
      contact.position = Math.round(Math.random()*10000);
      this.list.push(contact);
    }
  }

  public remove(contact:Contact): void{
    let index = this.list.indexOf(contact, 0);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }
}
