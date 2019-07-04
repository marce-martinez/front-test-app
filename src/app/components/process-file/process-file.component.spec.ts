import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFileComponent } from './process-file.component';

describe('ProcessFileComponent', () => {
  let component: ProcessFileComponent;
  let fixture: ComponentFixture<ProcessFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
