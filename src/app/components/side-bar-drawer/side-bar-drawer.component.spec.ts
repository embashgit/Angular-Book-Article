import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDrawerComponent } from './side-bar-drawer.component';

describe('SideBarDrawerComponent', () => {
  let component: SideBarDrawerComponent;
  let fixture: ComponentFixture<SideBarDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
