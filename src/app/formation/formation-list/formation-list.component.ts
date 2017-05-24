import { Subscription } from 'rxjs/Subscription';
import { Formation } from './../../shared/models/formation';
import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as JQuery from 'jquery';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  @Input() formations: Array<Formation> = [];
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(id: string) {
    this.onDelete.emit(id);
  }

}
