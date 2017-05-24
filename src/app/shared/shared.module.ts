import { HttpModule } from '@angular/http';
import { FormationService } from './services/formation.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  exports:
  [
    NavbarComponent,
    HighlightDirective
  ],
  declarations: [NavbarComponent, HighlightDirective],
  providers: [FormationService]
})
export class SharedModule { }
