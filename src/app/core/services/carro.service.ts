import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from 'src/app/core/models/car.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CarroService {

  private apiUrl = 'http://localhost:3000/carros';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.apiUrl);
  }


  public getById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.apiUrl}/${id}`);
  }


  adicionarCarro(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.apiUrl, carro);

  }

  excluirCarro({ id }: { id: number; }): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  //função salvar após editar
  salvarCarro(carro: Carro) {
    this.http.put(`${this.apiUrl}/${carro.id}`, carro).subscribe(
      () => {
        console.log('Carro salvo com sucesso!');
      },
      (error) => {
        console.error('Erro ao salvar o carro:', error);
      }
    );
  }


  
  atualizarCarro(carro: Carro): Observable<Carro> {
    const url = `${this.apiUrl}/${carro.id}`;
    return this.http.put<Carro>(url, carro);
  }
}

