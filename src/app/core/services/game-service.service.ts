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
      thumbnail: 'https://m.media-amazon.com/images/I/71FvD8y-jL._AC_UF894,1000_QL80_.jpg',
      category: 'Adventure',
      players: 1,
      rating: 4.5,
      featured: true,
      aspectRatio: 'landscape'
    },
    {
      id: '2',
      title: 'Temple Run 2',
      thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202301/1917/b4914115148977124588789ad8716787d5558117c77e557b.png',
      category: 'Adventure',
      players: 1,
      rating: 4.3,
      featured: true,
      aspectRatio: 'portrait'
    },
    {
      id: '3',
      title: 'Candy Crush Saga',
      thumbnail: 'https://assets.nintendo.com/image/upload/ar_1:1,c_fill,q_auto:best,f_auto:auto/ncom/software/switch/70010000000851/91522877954495574f940785f72524b515848751b572279b97771b1b94525859',
      category: 'Puzzle',
      players: 1,
      rating: 4.7,
      featured: true,
      aspectRatio: 'square'
    },
    {
      id: '4',
      title: 'Angry Birds 2',
      thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202301/1917/b4914115148977124588789ad8716787d5558117c77e557b.png',
      category: 'Action',
      players: 1,
      rating: 4.4,
      featured: false,
      aspectRatio: 'portrait'
    },
    {
      id: '5',
      title: 'Call of Duty: Mobile',
      thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202311/0711/c745b619f59897864491778b8744795811efc798959f7984.png',
      category: 'Shooter',
      players: 100,
      rating: 4.8,
      featured: true,
      aspectRatio: 'landscape'
    },
     {
      id: '6',
      title: 'Genshin Impact',
      thumbnail: 'https://m.media-amazon.com/images/I/81vYvE7L9IL._AC_UF1000,1000_QL80_.jpg',
      category: 'RPG',
      players: 1,
      rating: 4.6,
      featured: true,
      aspectRatio: 'portrait'
    },
    {
      id: '7',
       title: 'Minecraft',
       thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Minecraft_logo.png',
       category: 'Sandbox',
       players: 8,
       rating: 4.9,
       featured: true,
      aspectRatio: 'square'
    },
    {
        id: '8',
        title: 'PUBG Mobile',
        thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202310/1217/4429715714a58b8772a857f77f518414b7891845f9899f12.png',
        category: 'Action',
        players: 100,
        rating: 4.5,
        featured: false,
      aspectRatio: 'landscape'
    },
    {
        id: '9',
        title: 'Ludo King',
        thumbnail: 'https://m.media-amazon.com/images/I/71M5D6P7-jL._AC_UF894,1000_QL80_.jpg',
        category: 'Board',
        players: 4,
        rating: 4.2,
        featured: false,
      aspectRatio: 'square'
    },
    {
        id: '10',
        title: 'Free Fire',
        thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202307/1819/e1b5997f594c7c457b927854891b7582f8885a557875971a.png',
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
