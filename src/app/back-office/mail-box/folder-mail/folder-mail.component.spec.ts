import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderMailComponent } from './folder-mail.component';

describe('FolderMailComponent', () => {
  let component: FolderMailComponent;
  let fixture: ComponentFixture<FolderMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
