import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersConnexionComponent } from './users-connexion.component';

describe('UsersConnexionComponent', () => {
  let component: UsersConnexionComponent;
  let fixture: ComponentFixture<UsersConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
