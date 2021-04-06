import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreballsComponent } from './treballs.component';

describe('TreballsComponent', () => {
  let component: TreballsComponent;
  let fixture: ComponentFixture<TreballsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreballsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreballsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
