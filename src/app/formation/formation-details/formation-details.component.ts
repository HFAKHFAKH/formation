import { ActivatedRoute } from '@angular/router';
import { FormationService } from './../../shared/services/formation.service';
import { Subscription } from 'rxjs/Subscription';
import { Formation } from './../../shared/models/formation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

  id: any;
  formation: Formation;
  subs: Array<Subscription> = [];

  constructor(private formationService: FormationService, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      console.log('id', this.id);
    });
  }

  ngOnInit() {
    this.formation = new Formation();
    if (this.id) {
      this.find(this.id);
    }
  }

  find(id: string) {
    const sub = this.formationService.find(this.id).subscribe((data) => {
      this.formation = data;
    });
    this.subs.push(sub);
  }

}
