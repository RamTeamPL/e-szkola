import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolAnnouncementsPage } from './school-announcements.page';

describe('SchoolAnnouncementsPage', () => {
  let component: SchoolAnnouncementsPage;
  let fixture: ComponentFixture<SchoolAnnouncementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAnnouncementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
