import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopbarWidgetComponent } from './layout-topbar-widget.component';

describe('LayoutTopbarWidgetComponent', () => {
  let component: LayoutTopbarWidgetComponent;
  let fixture: ComponentFixture<LayoutTopbarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTopbarWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTopbarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
