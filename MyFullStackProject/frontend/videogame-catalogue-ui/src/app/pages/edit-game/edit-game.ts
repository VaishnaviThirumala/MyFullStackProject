import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameService } from '../../services/game';
import { Game } from '../../models/gamemodel';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-edit-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-game.html'
})
export class EditGameComponent implements OnInit {
  gameForm!: FormGroup;
  gameId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.gameId = Number(this.route.snapshot.paramMap.get('id'));

    // Initialize form
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: [2000, Validators.required]
    });

    // Load game data
    this.gameService.getGameById(this.gameId).subscribe(game => {
      this.gameForm.patchValue(game);
      this.cdr.detectChanges();
    });
  }

  onSave() {
    if (this.gameForm.invalid) return;

    const updatedGame: Game = {
      id: this.gameId,
      ...this.gameForm.value
    };

    this.gameService.updateGame(this.gameId, updatedGame).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err: any) => console.error('Save failed', err)
    });
  }
}
