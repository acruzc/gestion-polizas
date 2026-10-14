import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Policy } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  private API_URL = 'http://localhost:3000/api/policies';
  private policies: Policy[] = [
  { id: "1", holder: "Ana López", type: "auto", status: "activa", premium: 127.5 },
  { id: "2", holder: "Javier García", type: "hogar", status: "expirada", premium: 238.8 },
  { id: "3", holder: "Rocío Martínez", type: "vida", status: "pendiente", premium: 74.3 },
]; //Datos para mostrar antes de conectar con backend

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<Policy[]> {

    return this.http.get<Policy[]>(this.API_URL);
  }

  getPolicyById(id: string): Observable<Policy | null> {
    return this.http.get<Policy>(`${this.API_URL}/${id}`);
  }
}
