import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfigService } from '../config.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  form = new FormGroup({});
  model;
  fields;
  config_id = 1;

  constructor(private cfg: ConfigService) { }

  ngOnInit(): void {
    this.displayForm();
    this.form.valueChanges.subscribe(console.log);
  }

  onSubmit(f) {
    console.log(f.value);
  }

  displayForm() {
    this.form.reset();

    this.cfg.getConfig(this.config_id).subscribe((res) => {
      console.log(res);
      this.model = res['model'];
      this.fields = res['fields'];
    });
  }

  switchConfig() {
    this.config_id = (this.config_id === 1) ? 2 : 1;
    this.displayForm();
  }
}
