import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { FilesService } from "../../services/files.service";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  id: number;
  file: any;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private filesService:FilesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.file = this.filesService.getfile(this.id);
    console.log(this.file);
  }

}
