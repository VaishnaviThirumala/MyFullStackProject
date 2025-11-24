// src/app/pages/create-game/create-game.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game';
import { Game } from '../../models/gamemodel';

@Component({
  selector: 'app-create-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-game.html'
})
export class CreateGameComponent {
  gameForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private gameService: GameService
  ) {
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: [2000, [Validators.required, Validators.min(1950)]]
    });
  }

  save() {
    if (this.gameForm.invalid) return;

    const newGame: Game = this.gameForm.value;

    this.gameService.createGame(newGame).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err:any) => console.error('Create failed', err)
    });
  }
}
