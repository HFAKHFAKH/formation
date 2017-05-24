import { FormationListContainerComponent } from './../formation-list-container/formation-list-container.component';
import { FormationContainerComponent } from './../formation-container/formation-container.component';
import { FormationDetailsComponent } from './../formation-details/formation-details.component';
import { FormationListComponent } from './../formation-list/formation-list.component';
import { SharedModule } from './../../shared/shared.module';
import { FormationRoutingModule } from './../formation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormComponent } from './formation-form.component';

describe('FormationFormComponent', () => {
  let component: FormationFormComponent;
  let fixture: ComponentFixture<FormationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormationRoutingModule,
        SharedModule
      ],
      declarations: [
        FormationListComponent,
        FormationDetailsComponent,
        FormationFormComponent,
        FormationContainerComponent,
        FormationListContainerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
