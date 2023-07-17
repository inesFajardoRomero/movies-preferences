import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGenero } from '../../interfaces/genero.interfaces';
import { SeguridadService } from '../../services/seguridad.service';
import { ComponentService } from 'src/app/services/components.service';

@Component({
  selector: 'components-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  listaGenero: IGenero[] = [];

  constructor(private router:Router,private seguridadService : SeguridadService,
    private componentService : ComponentService){

  }
  public generoPeliculas: IGenero[]= [];

  accederLogin(){
    this.router.navigate(['modules/login']);
  }

  cerrarSesion(){
    this.seguridadService.logout();
    this.router.navigate(["/modules/home"])
  }

  ngOnChanges(){
    this.generoPeliculas = this.listaGenero;
  }

  descargarReporte(){
    this.componentService.getReporte().subscribe(result => {
      if(result.archivo){
        var blob = this.b64toBlob(result.archivo, "application/pdf");
        let a = document.createElement("a");
        document.body.appendChild(a);
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = String("reporte.pdf");
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      }
      else{
        alert("Error al generar el reporte");
      }

    }, (Error) => {
      alert("Error al generar el reporte");
    })
  }

  b64toBlob(b64Data : string, contentType : string) {
    contentType = contentType || '';
    let sliceSize = 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }


}
