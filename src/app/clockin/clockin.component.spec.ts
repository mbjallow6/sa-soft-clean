import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockinComponent } from './clockin.component';

describe('ClockinComponent', () => {
  let component: ClockinComponent;
  let fixture: ComponentFixture<ClockinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
