import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilesService {
  //files: Observable<any[]>;
  files: Array<any>;
  constructor() { }

  getFiles(){
    this.files = [
      {
        "name":"DOCUMENTOS CI" ,
        "tipo":"folder",
        "ruta":"1"
      },
      {
        "name":"INFORMES ANALITICOS" ,
        "tipo":"folder",
        "ruta":"2"
      },
      {
        "name":"CI-123456" ,
        "tipo":"file"
      },
      {
        "name":"CI-123456" ,
        "tipo":"file"
      },
      {
        "name":"CI-123456" ,
        "tipo":"file"
      },
      {
        "name":"CI-123456" ,
        "tipo":"file"
      },
      {
        "name":"CI-123456" ,
        "tipo":"file"
      },{
        "name":"CI-123456" ,
        "tipo":"file"
      },

      {
        "name":"CI-123456" ,
        "tipo":"file"
      },
      {
        "name":"CI-123456" ,
        "tipo":"file"
      },
    ];
    return this.files;
  }
}
