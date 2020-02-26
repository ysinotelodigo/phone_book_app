import { Component, OnInit, Input } from '@angular/core';

import {Contact} from 'src/app/contact';
import {DataSourceService} from 'src/app/data.source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  contact : Contact;

  constructor(private dataSourceService: DataSourceService,private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

      this.dataSourceService.get(id)
        .subscribe(c => this.contact = Object.assign({}, c));
    
  
    
  }

  save() : void{
    this.dataSourceService.save(this.contact);
    this.router.navigate(['/']);
  }

}
