import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvatarComponent } from './list-avatar.component';

describe('ListAvatarComponent', () => {
  let component: ListAvatarComponent;
  let fixture: ComponentFixture<ListAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
