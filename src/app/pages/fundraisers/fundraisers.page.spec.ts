import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FundraisersPage } from './fundraisers.page';

describe('FundraisersPage', () => {
  let component: FundraisersPage;
  let fixture: ComponentFixture<FundraisersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraisersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
