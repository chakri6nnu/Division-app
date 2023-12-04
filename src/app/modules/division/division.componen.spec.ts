import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DivisionComponent } from './division.component';

fdescribe('DivisionComponent', () => {
  let component: DivisionComponent;
  let fixture: ComponentFixture<DivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule],
      declarations: [DivisionComponent],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onChangeSubmitEvent', () => {
    component.firstValue = 100;
    component.secoundvalue = 50;
    component.onChangeSubmitEvent();
    expect(component.result).toEqual(2);
  });

  it('should call onChangeSubmitEvent with undefind', () => {
    component.firstValue = -2;
    component.onChangeSubmitEvent();
    expect(component.result).toEqual(0);
  });

  it('should call isValidFirstValue', () => {
    component.firstValue = 100;
    expect(component.isValidFirstValue()).toEqual(true);
  });

  it('should call isValidSecoundValue', () => {
    component.secoundvalue = 50;
    expect(component.isValidSecoundValue()).toEqual(true);
  });
});
