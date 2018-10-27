import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCVPage } from './extra-cv.page';

describe('ExtraCVPage', () => {
  let component: ExtraCVPage;
  let fixture: ComponentFixture<ExtraCVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraCVPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
