
import { Component,Inject} from '@angular/core';
import {Contact } from 'src/app/contact';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'removeDialog',
    templateUrl: 'removeDialog.html',
  })
  export class RemoveDialog {
    constructor( @Inject(MAT_DIALOG_DATA) public data: Contact){}


  }
  