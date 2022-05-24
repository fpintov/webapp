import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidenavWidgetComponent } from './layout-sidenav-widget.component';

describe('LayoutSidenavWidgetComponent', () => {
  let component: LayoutSidenavWidgetComponent;
  let fixture: ComponentFixture<LayoutSidenavWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSidenavWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSidenavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
