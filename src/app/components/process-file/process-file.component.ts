import { Component, OnInit } from '@angular/core';
import { AccessFilesService } from 'src/app/services/access-files.service';
import { Departamento } from 'src/app/models/departamento';
import { Provincia } from 'src/app/models/provincia';
import { Distrito } from 'src/app/models/distrito';

const file = 'assets/ubigeos.txt';

@Component({
  selector: 'app-process-file',
  templateUrl: './process-file.component.html',
  styleUrls: ['./process-file.component.css']
})
export class ProcessFileComponent implements OnInit {

  departamentos: Departamento[] = [];
  provincias: Provincia[] = [];
  distritos: Distrito[] = [];

  constructor(private accessFilesService: AccessFilesService) { }

  ngOnInit() {
  }

  readTextFile() {
    this.accessFilesService.readFile(file).subscribe(data => {
      let lines = data.split('\n');
      lines.forEach(line=>{
        this.processLine(line);
      });
      console.log(this.departamentos);
      console.log(this.provincias);
      console.log(this.distritos);
    });
  }

  processLine(_line:string){    
    let line = _line.replace(/ \/ /g,'/');
    let elements = line.split('/');
    const _departamento = elements[0].replace('"', '');
    const _provincia = elements[1];
    const _distrito= elements[2].replace('"', '');
    this.processDepartamentos(_departamento);
    this.processProvincias(_provincia, _departamento);
    this.processDistritos(_distrito, _provincia);
    
  }

  processDepartamentos(_departamento:string){
    let infoDepartamento= _departamento.split(/ (.+)?/, 2);
    let departamento: Departamento;

    const condicion = ({codigo})=> codigo == infoDepartamento[0];

    if(this.departamentos.find(condicion) === undefined){
      departamento = {
        codigo: infoDepartamento[0],
        nombre: infoDepartamento[1]
      }
      this.departamentos.push(departamento);      
    }
  }

  processProvincias(_provincia:string, _departamento:string){
    let infoProvincia= _provincia.split(/ (.+)?/, 2);
    let infoDepartamento = _departamento.split(/ (.+)?/, 2);
    let provincia: Provincia;

    const condicion = ({codigo})=> codigo == infoProvincia[0];

    if(this.provincias.find(condicion) === undefined && infoProvincia[1] != undefined){
      provincia = {
        codigo: infoProvincia[0],
        nombre: infoProvincia[1],
        codigoPadre: infoDepartamento[0],
        descripcionPadre: infoDepartamento[1]
      }
      this.provincias.push(provincia);      
    }
    
  }

  processDistritos(_distrito:string, _provincia:string){
    let infoDistrito= _distrito.split(/ (.+)?/, 2);
    let infoProvincia = _provincia.split(/ (.+)?/, 2);
    let distrito: Distrito;

    const condicion = ({codigo})=> codigo == infoDistrito[0];

    if(this.distritos.find(condicion) === undefined && infoDistrito[1] != undefined){
      distrito = {
        codigo: infoDistrito[0],
        nombre: infoDistrito[1],
        codigoPadre: infoProvincia[0],
        descripcionPadre: infoProvincia[1]
      }
      this.distritos.push(distrito);      
    }
  }

}
