import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/enviroments';
import { Observable } from 'rxjs';
import { blockMinecraft } from '../models/blockMinecraft.models';
@Injectable({
  providedIn: 'root',
})
export class BlockService {
   private apiUrl = `${environment.apiBaseUrl}/blocks`;

  constructor(private http: HttpClient) {}

  getBlock(): Observable<blockMinecraft[]> {
    return this.http.get<blockMinecraft[]>(this.apiUrl);
  }

  crearBlock(block: blockMinecraft): Observable<blockMinecraft> {
    return this.http.post<blockMinecraft>(this.apiUrl, block);
  }

  actualizarBlock(id: string, block: blockMinecraft): Observable<void> {
    const { _id, ...body } = block;

    return this.http.put<void>(`${this.apiUrl}/${id}`, body);
  }

  eliminarBlock(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
