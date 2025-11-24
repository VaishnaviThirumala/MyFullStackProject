import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseGamesComponent } from './browse-games';
import { GameService } from '../../services/game';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('BrowseGamesComponent', () => {
  let component: BrowseGamesComponent;
  let fixture: ComponentFixture<BrowseGamesComponent>;

  const mockGameService = {
    getGames: jest.fn()
  };

  const mockRouter = {
    navigate: jest.fn()
  };

  const gamesMock = [
    { id: 1, title: 'Halo', genre: 'Shooter', releaseYear: 2001 },
    { id: 2, title: 'Minecraft', genre: 'Sandbox', releaseYear: 2011 }
  ];

  beforeEach(async () => {
    mockGameService.getGames.mockReturnValue(of(gamesMock));

    await TestBed.configureTestingModule({
      imports: [BrowseGamesComponent],
      providers: [
        { provide: GameService, useValue: mockGameService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load games', () => {
    expect(component.games.length).toBe(2);
    expect(component.loading).toBe(false);
  });

  it('should navigate to edit', () => {
    component.editGame(1);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/edit', 1]);
  });
});
