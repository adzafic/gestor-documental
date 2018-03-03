import { Component, OnInit } from '@angular/core';
import { FilesService } from "../../services/files.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  files:any[];

  constructor(private filesService:FilesService) { }

  ngOnInit() {
    this.files = this.filesService.getFiles();
  }

}
