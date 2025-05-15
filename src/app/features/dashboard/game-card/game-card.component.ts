import { Component, HostBinding, Input } from '@angular/core';
import { Game } from '../../../interfaces/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  imports: [CommonModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input() game!: Game;

  // @HostBinding('style.grid-column-end')
  // get gridColumnSpan() {
  //   return this.game.featured ? 'span 2' : 'span 1';
  // }

  // @HostBinding('style.grid-row-end')
  // get gridRowSpan() {
  //   return this.game.featured ? 'span 2' : 'span 1';
  // }
}
