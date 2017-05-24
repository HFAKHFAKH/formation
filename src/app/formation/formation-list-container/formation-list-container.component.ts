import { Subscription } from 'rxjs/Subscription';
import { Formation } from './../../shared/models/formation';
import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-formation-list-container',
  templateUrl: './formation-list-container.component.html',
  styleUrls: ['./formation-list-container.component.css']
})
export class FormationListContainerComponent implements OnInit, OnDestroy {

  formations: Array<Formation> = [];
  subs: Array<Subscription> = [];

  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.fetch();
  }

  ngOnDestroy() {
    this.subs.map((s) => {
      s.unsubscribe();
    });

  }

  fetch() {
    const sub = this.formationService.fetch().subscribe((data) => {
      this.formations = data;
    });
    this.subs.push(sub);
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this?')) {
      const sub = this.formationService.remove(id).subscribe(() => {
        this.fetch();
      });
      this.subs.push(sub);
    }
  }

}
