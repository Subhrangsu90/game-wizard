import { Injectable } from '@angular/core';
import { Game } from '../../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  private games: Game[] = [
   {
      id: '1',
      title: 'Subway Surfers',
      thumbnail: 'assets/image/image.png',
      category: 'Adventure',
      players: 1,
      rating: 4.5,
      featured: true,
      aspectRatio: 'landscape'
    },
    {
      id: '2',
      title: 'Temple Run 2',
      thumbnail: 'assets/image/image.png',
      category: 'Adventure',
      players: 1,
      rating: 4.3,
      featured: true,
      aspectRatio: 'portrait'
    },
    {
      id: '3',
      title: 'Candy Crush Saga',
      thumbnail: 'assets/image/image.png',
      category: 'Puzzle',
      players: 1,
      rating: 4.7,
      featured: true,
      aspectRatio: 'square'
    },
    {
      id: '4',
      title: 'Angry Birds 2',
      thumbnail: 'assets/image/image.png',
      category: 'Action',
      players: 1,
      rating: 4.4,
      featured: false,
      aspectRatio: 'portrait'
    },
    {
      id: '5',
      title: 'Call of Duty: Mobile',
      thumbnail: 'assets/image/image.png',
      category: 'Shooter',
      players: 100,
      rating: 4.8,
      featured: true,
      aspectRatio: 'landscape'
    },
     {
      id: '6',
      title: 'Genshin Impact',
      thumbnail: 'assets/image/image.png',
      category: 'RPG',
      players: 1,
      rating: 4.6,
      featured: true,
      aspectRatio: 'portrait'
    },
    {
      id: '7',
       title: 'Minecraft',
       thumbnail: 'assets/image/image.png',
       category: 'Sandbox',
       players: 8,
       rating: 4.9,
       featured: true,
      aspectRatio: 'square'
    },
    {
        id: '8',
        title: 'PUBG Mobile',
        thumbnail: 'assets/image/image.png',
        category: 'Action',
        players: 100,
        rating: 4.5,
        featured: false,
      aspectRatio: 'landscape'
    },
    {
        id: '9',
        title: 'Ludo King',
        thumbnail: 'assets/image/image.png',
        category: 'Board',
        players: 4,
        rating: 4.2,
        featured: false,
      aspectRatio: 'square'
    },
    {
        id: '10',
        title: 'Free Fire',
        thumbnail: 'assets/image/image.png',
        category: 'Action',
        players: 50,
        rating: 4.4,
        featured: false,
      aspectRatio: 'portrait'
    }
  ];

   getGames(): Game[] {
    return this.games;
  }

  getGamesByCategory(category: string): Game[] {
    if (category === 'all') return this.games;
    return this.games.filter(game => game.category === category);
  }

  getCategories(): string[] {
    return ['all', ...new Set(this.games.map(game => game.category))];
  }
}
