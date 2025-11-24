import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameService } from './game';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // provides HttpClient
      providers: [GameService],
    });

    service = TestBed.inject(GameService); // inject properly
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
