import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquiagemDetailComponent } from './maquiagem-detail.component';

describe('MaquiagemDetailComponent', () => {
  let component: MaquiagemDetailComponent;
  let fixture: ComponentFixture<MaquiagemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquiagemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquiagemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
