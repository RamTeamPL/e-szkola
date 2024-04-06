import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassAnnouncementsPage } from './class-announcements.page';

describe('ClassAnnouncementsPage', () => {
  let component: ClassAnnouncementsPage;
  let fixture: ComponentFixture<ClassAnnouncementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAnnouncementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
