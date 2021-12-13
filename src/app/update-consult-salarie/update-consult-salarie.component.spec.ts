import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsultSalarieComponent } from './update-consult-salarie.component';

describe('UpdateConsultSalarieComponent', () => {
  let component: UpdateConsultSalarieComponent;
  let fixture: ComponentFixture<UpdateConsultSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConsultSalarieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConsultSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
