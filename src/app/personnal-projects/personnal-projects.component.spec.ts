import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalProjectsComponent } from './personnal-projects.component';

describe('PersonnalProjectsComponent', () => {
  let component: PersonnalProjectsComponent;
  let fixture: ComponentFixture<PersonnalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
