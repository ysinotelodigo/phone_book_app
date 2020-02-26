import { Component, OnInit,ViewChild, Inject } from '@angular/core';

import { RemoveDialog } from 'src/app/list/remove.dialog.component';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';

import {DataSourceService} from 'src/app/data.source.service';
import {Contact} from 'src/app/contact';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'number', 'type','actions'];
  dataSource : MatTableDataSource<Contact>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dialog: MatDialog, private dataSourceService: DataSourceService){
    this.dataSource = new MatTableDataSource();
  }

  openDialog(c: Contact): void {
    
    const dialogRef = this.dialog.open(RemoveDialog, {data: c});

    dialogRef.afterClosed().subscribe(result => {
        this.dataSourceService.remove(result);
        this.dataSourceService.getAll().subscribe(x=> this.dataSource.data = x);
    });
  }

  ngOnInit() {
    this.dataSourceService.getAll().subscribe(x=> this.dataSource.data = x);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  

}

