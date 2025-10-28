import { Component } from '@angular/core';
import { Poesias, Poetry } from '../../shared/poesias/poesias';

@Component({
  selector: 'app-poetry-canvas',
  imports: [
    Poesias
  ],
  templateUrl: './poetry-canvas.html',
  styleUrl: './poetry-canvas.scss'
})
export class PoetryCanvas {
  // No seu component
  poems: Poetry[] = [
    {
      text: `Inferno: lugar quente, abafado <br> pessoas tristes, cansadas <br> suor escorrendo no rosto<br>Baforadas de ar quente <br> preenche o corpo por dentro e por fora<br>Ninguém tá bem <br>rostos cansados reclamam<br>e clamam socorro <br> não há resgate <br> o olhar invisível tem nas mãos o livro dos escolhidos <br> escolhidos sedentos por salvação<br>correm atrás da incerteza <br>falharam na lata <br> tramaram pra cima dos  meus <br> socorro! <br> a imagem apaga<br> Mas se você não entendeu <br> É claro que estou falando da Lapa!`,
      author: 'Andresa F Borges',
      reference: 'BORGES, A. F. Poesia Livre. Inferno. Salvador: Lapa, 2024.',
      imageUrl: 'assets/images/inferno.jpg',
      audioUrl: 'assets/audios/Inferno-poesia-2.mp3',
      recitedBy: 'Andresa'
    },
    {
      text: [
        'Caminho que me leva a onde não consigo enxergar',
        'O sol que me alcança longe, brilha em mim algo que eu não sabia existir',
        'Mas para onde irei? meu caminho é de espinhos e o tic tac do relógio não para',
        'Ora, eu sei para onde você vai, mas a onde quer estar?',
        'Quero estar em cada passo onde eu esteja, quero me seguir para nunca mais me perder',
        'Quero sentir o sol e de novo entender que eu estou aqui e que eu mereço viver.'
      ].join('<br>'),
      author: 'Andresa F Borges',
      reference: 'BORGES, A. F. Poesia Livre. Eu. Salvador: 2024.',
      imageUrl: 'assets/images/espelho.jpg',
      audioUrl: 'assets/audios/Eu-poesia.mp3',
      recitedBy: 'Andresa'
    },
    // {
    //   text: `Minha poesia sem imagem<br>mas com muita emoção<br>e quebras de linha<br>para dar ritmo.`,
    // }
  ];
}
