import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsFavoriteComponent } from './comics-favorite.component';

describe('ComicsFavoriteComponent', () => {
  let component: ComicsFavoriteComponent;
  let fixture: ComponentFixture<ComicsFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
