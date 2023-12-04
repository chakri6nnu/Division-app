import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DivisionComponent } from './division.component';
import { DivisionRoutingModule } from './division-routing.module';

@NgModule({
  imports: [CommonModule, DivisionRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [DivisionComponent],
})
export class DivisionModule {}
