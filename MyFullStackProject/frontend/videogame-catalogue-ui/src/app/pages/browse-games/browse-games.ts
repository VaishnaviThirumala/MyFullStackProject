import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game';
import { Game } from '../../models/gamemodel';
import { RouterModule, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-browse-games',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="loading" class="text-center mt-3">Loading...</div>

    <table *ngIf="!loading && games.length" class="table table-striped mt-3">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let game of games">
          <td>{{ game.title }}</td>
          <td>{{ game.genre }}</td>
          <td>{{ game.releaseYear }}</td>
          <td>
            <button class="btn btn-primary btn-sm" (click)="editGame(game.id)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
    <button class="btn btn-primary mb-2" [routerLink]="['/create']">Create New Game</button>
    </div>

    <div *ngIf="!loading && (!games || games.length === 0)" class="mt-3">
      No games found.
    </div>

  `
})
export class BrowseGamesComponent implements OnInit {
  games: Game[] = [];
  loading = true;

  constructor(private gameService: GameService, private router: Router,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.games = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching games:', err);
        this.loading = false;
      }
    });
  }

  editGame(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
