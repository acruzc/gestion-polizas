import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PolizaService } from '../../services/poliza.service';
import { Policy } from '../../models/models';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  polizas: Policy[] = [];
  cargando: boolean = true;
  estadoSeleccionado: string = 'todos';

  constructor(private polizaService: PolizaService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.polizaService.getPolicies().subscribe({
      next: (data) => {
        this.polizas = data;
        this.cargando = false;
    },
      error: (err) => {
        console.error('Error al cargar las pólizas:', err);
        this.cargando = false;
      }
    });
  }

  verPoliza(id: string): void {
    // La función se activa cuando se clicka en una fila de la tabla o en el botón "Ver" de la fila correspondiente.
    this.router.navigate(['/policies', id]);
    console.log('Ver detalles de la póliza con ID:', id);
  }
}    
