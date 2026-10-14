import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Policy } from '../../models/models';
import { PolizaService } from "../../services/poliza.service";

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent {
  poliza: Policy | null = null;
  cargando: boolean = true;
  errorMensaje: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private policyService: PolizaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.policyService.getPolicyById(id).subscribe(
        (policy) => {
          this.poliza = policy;
          this.cargando = false;
        },
        (error) => {
          this.errorMensaje = 'No se ha podido cargar información de la póliza.';
          this.cargando = false;
        }
      );
    } else {
      this.errorMensaje = 'El ID de póliza no es válido.';
      this.cargando = false;
    }
  }

  volverAlListado(): void {
    this.router.navigate(['/policies']);
  }
}
