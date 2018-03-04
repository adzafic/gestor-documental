import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilesService {
  //files: Observable<any[]>;
  files: Array<any> = [
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
  file:any;
  constructor() { }

  getFiles(){
    return this.files;
  }

  getfile(id:number){
    this.file = this.files.filter(function(obj) {
      //console.log(obj);
      return obj.ruta == id;
    });

    return this.file[0];
  }
}
