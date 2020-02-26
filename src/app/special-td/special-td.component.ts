import { Component, OnInit, Input } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

import {DataSourceService} from 'src/app/data.source.service';

import {Contact} from 'src/app/contact';

@Component({
  selector: 'special-td',
  templateUrl: './special-td.component.html',
  styleUrls: ['./special-td.component.scss']
})
export class SpecialTdComponent implements OnInit {

  @Input() element: Contact;
  @Input() field: string;
  @Input() content : string;
  readOnly: boolean = true;
  

  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit() {
  }

  myFunction():void{
    this.readOnly = false;
  }

  update():void{
      this.element[this.field]=this.content;
      this.dataSourceService.save(this.element);
      this.readOnly = true;
  }
}
