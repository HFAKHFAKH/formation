import { FormationService } from './../../shared/services/formation.service';
import { Formation } from './../../shared/models/formation';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit, OnDestroy {
  id: any;
  formation: Formation;
  subs: Array<Subscription> = [];

  // second form
  formationFormRx: FormGroup;
  //

  constructor(private formationService: FormationService, private router: ActivatedRoute, private builder: FormBuilder) {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      console.log('id', this.id);
    });
  }

  ngOnInit() {
    this.formation = new Formation();
    // second form
    this.createFormationFormRx('', '');
    //
    if (this.id) {
      this.find(this.id);
    }

  }

  ngOnDestroy() {
    this.subs.map((s) => {
      s.unsubscribe();
    });
  }

  save(form: NgForm) {
    const title = form.value.title;
    const description = form.value.description;
    const model = { title, description };
    console.log('Add Succes', model);
    if (this.id) {
      this.edit(this.id, model);
    } else {
      this.add(model);
    }
    // add to db API rest post
    form.reset();
  }

  add(model: Formation) {
    const sub = this.formationService.save(model).subscribe((data) => {
      this.formation = data;
    });
    this.subs.push(sub);
  }

  edit(id: string, model: Formation) {
    model.id = +id;
    const sub = this.formationService.edit(id, model).subscribe((data) => {
      this.formation = data;
    });
    this.subs.push(sub);
  }


  find(id: string) {
    const sub = this.formationService.find(this.id).subscribe((data) => {
      this.formation = data;
      // second form
      this.createFormationFormRx(data.title, data.description);
      //
    });
    this.subs.push(sub);
  }

  // second form
  saveFormation() {
    console.log('saveFormation', this.formationFormRx.value);
    /*const title = this.formationForm.value;
    const description = this.formationForm.value;
    const model = { title, description };
    console.log('Add Succes', model);
    if (this.id) {
      this.edit(this.id, model);
    } else {
      this.add(model);
    }*/
  }

  createFormationFormRx(title: string, description: string) {
    // second form
    this.formationFormRx = this.builder.group({
      title: new FormControl(title, [Validators.required, Validators.pattern('[A-Z]*')]),
      description: new FormControl(description)
    });
    //
  }
  //
}
