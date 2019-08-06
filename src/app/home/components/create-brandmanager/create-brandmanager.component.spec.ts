import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrandmanagerComponent } from './create-brandmanager.component';

describe('CreateBrandmanagerComponent', () => {
  let component: CreateBrandmanagerComponent;
  let fixture: ComponentFixture<CreateBrandmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBrandmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBrandmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
