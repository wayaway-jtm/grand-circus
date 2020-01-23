import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mad-lib-form',
  templateUrl: './mad-lib-form.component.html',
  styleUrls: ['./mad-lib-form.component.css']
})
export class MadLibFormComponent implements OnInit {
 // madLibPhrase: string;
  editMode: boolean;

  @Input() placeholder: string;

  constructor() { 
 //   this.madLibPhrase = 'cat';
    this.editMode = true;
  }

  onSubmit() {
  
    this.editMode = false;
  }

  ngOnInit() {
  }

}
