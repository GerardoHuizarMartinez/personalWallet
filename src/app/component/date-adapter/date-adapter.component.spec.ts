import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAdapterComponent } from './date-adapter.component';

describe('DateAdapterComponent', () => {
  let component: DateAdapterComponent;
  let fixture: ComponentFixture<DateAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAdapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
