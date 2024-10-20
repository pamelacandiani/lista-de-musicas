import { HttpClient } from '@angular/common/http';
import { Musica } from '../musica';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MusicaService {

  constructor(private http:HttpClient) { }

  getMusicas(): Observable<Musica []>{
    return this.http.get<Musica []>('http://localhost:3000/musicas')
  }

}



