import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMailComponent } from './details-mail.component';

describe('DetailsMailComponent', () => {
  let component: DetailsMailComponent;
  let fixture: ComponentFixture<DetailsMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
