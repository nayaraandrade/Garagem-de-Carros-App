import { Component, OnInit, Input, Output } from '@angular/core';
import { CarroService } from 'src/app/core/services/carro.service';
import { Carro } from 'src/app/core/models/car.model';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})

export class CarrosComponent implements OnInit {


  //recebendo valor do componente filho com output
  carros: Carro[] = [];


  carroSelecionado?: Carro;

  constructor(private carroService: CarroService) { } //injetando o serviço

  ngOnInit(): void {

    this.getCarros(); //chamando a funcao para ser chamada assim que for renderizado
  }

  selecionarCarro(c: Carro): void {
    this.carroSelecionado = c;
  }

  // Função para chamar o serviço e atribuir o valor que vem do servidor ao nosso array carros.
  getCarros(): void {
    this.carroService.getAll().subscribe(carros => {
      this.carros = carros
    });
  }


  //Funções buttons
  receberCarroAdicionado(novoCarro: Carro) {

    this.carroService.adicionarCarro(novoCarro).subscribe({
      next: (carro) => {
        this.carros.push(carro)
      },
      error: (err) => {
        console.log(err)
      }
    })

  }


  editarCarro(carros: Carro): void {
    carros.edite = true;

  }



  salvarCarro(carro: Carro): void {
    carro.edite = false;
    this.carroService.atualizarCarro(carro).subscribe(
      (carroAtualizado) => {
        console.log('Carro atualizado:', carroAtualizado);
      },
      (error) => {
        console.error('Erro ao atualizar o carro:', error);
      }
    );
  }

  excluirCarro(id: number) {
    this.carroService.excluirCarro({ id })
      .subscribe(
        () => {
          console.log('Carro excluído com sucesso');
        },
        (error) => {
          console.error('Erro ao excluir o carro:', error);
        }
      );
  }
 
}
