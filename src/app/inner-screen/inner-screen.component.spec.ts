import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerScreenComponent } from './inner-screen.component';

describe('InnerScreenComponent', () => {
  let component: InnerScreenComponent;
  let fixture: ComponentFixture<InnerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
