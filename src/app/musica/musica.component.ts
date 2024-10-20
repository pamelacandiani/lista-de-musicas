import { Component, OnInit } from '@angular/core';
import { Musica } from '../../musica';
import { MusicaService } from '../musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent implements OnInit{

  musica: Musica[] = [];

  constructor(private service: MusicaService){}

  ngOnInit(): void {
    this.loadMusicas();
  }

  loadMusicas(){
    this.service.getMusicas().subscribe({
      next: data => this.musica = data
    })
  }

  delete(musica: Musica){
    this.service.delete(musica).subscribe({
      next: () => this.loadMusicas()
    })
  }

}
