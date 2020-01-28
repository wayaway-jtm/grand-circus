import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ITodo} from './ITodo';
import { LoggerService } from 'src/logger.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [LoggerService]
})
export class TodoComponent implements OnInit, ITodo {

  @Input() 
  completed : boolean;

  @Input() 
  todos : boolean;

  @Input() 
  task : string;

  @Output() deleted = new EventEmitter();

  completedClassList : any;

  constructor(private logger:LoggerService) { 

  }

  onDelete() {
    this.logger.log('Deleting element' + this.task);
    this.deleted.emit();
  }

  ngOnInit() {
  }
}
