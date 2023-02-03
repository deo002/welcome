import { Component, Input } from '@angular/core';
import { Table } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  DEFAULT_PAGINATION_SIZE : number = 10;

  @Input() table : Table = {
    headers: [],
    rows: [],
    paginationSize: this.DEFAULT_PAGINATION_SIZE,
    messageOnEmptyTable: ""
  };
}
