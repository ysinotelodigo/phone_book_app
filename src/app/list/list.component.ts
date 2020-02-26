import { Component, OnInit,ViewChild, Inject } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  number: string;
  type: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'number', 'type','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);;

  animal: string="asdf";
  name: string="asdfa";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog){
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
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

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
