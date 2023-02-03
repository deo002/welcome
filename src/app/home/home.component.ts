import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects = {
    headers: [
      {
        headerValue: "Project Name",
        isSortable:  true
      },
      {
        headerValue: "Description",
        isSortable:  true
      },
      {
        headerValue: "Approved Releases",
        isSortable:  false
      }
    ],
    rows: [
      [
        'kk',
        '',
        'not available'
      ]
    ],
    paginationSize: 10,
    messageOnEmptyTable: "You do not own any projects."
  };
  components = {
    headers: [
      {
        headerValue: "Component Name",
        isSortable:  true
      },
      {
        headerValue: "Description",
        isSortable:  false
      }
    ],
    rows: [],
    paginationSize: 10,
    messageOnEmptyTable: "You do not have any components."
  };
  taskSubmissions = {
    headers: [
      {
        headerValue: "Document Name",
        isSortable:  true
      },
      {
        headerValue: "Status",
        isSortable:  false
      },
      {
        headerValue: "Actions",
        isSortable:  false
      }
    ],
    rows: [
      [
        'HxH',
        'Pending',
        '<i class="bi bi-trash-fill"></i>'
      ],
      [
        'Aot',
        'Pending',
        '<i class="bi bi-trash-fill"></i>'
      ]
    ],
    paginationSize: 10,
    messageOnEmptyTable: "You do not have any tasks to submit."
  };
  taskAssignments = {
    headers: [
      {
        headerValue: "Document Name",
        isSortable:  true
      },
      {
        headerValue: "Status",
        isSortable:  false
      }
    ],
    rows: [],
    paginationSize: 10,
    messageOnEmptyTable: "There are no tasks assigned to you."
  };
}
