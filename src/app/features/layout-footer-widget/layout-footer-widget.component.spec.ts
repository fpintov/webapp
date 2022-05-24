import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFooterWidgetComponent } from './layout-footer-widget.component';

describe('LayoutFooterWidgetComponent', () => {
  let component: LayoutFooterWidgetComponent;
  let fixture: ComponentFixture<LayoutFooterWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutFooterWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFooterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
