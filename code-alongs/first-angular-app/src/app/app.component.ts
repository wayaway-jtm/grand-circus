import { Component } from '@angular/core';
import { ITodo } from './todo/ITodo';
import { LoggerService } from 'src/logger.service';

interface Person {
  firstName: string;
  lastName: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
export class AppComponent {
  title = 'first-angular-app';
  hideTitle = true;

  today: Date = new Date();
  birthday: Date = new Date();

  todos: ITodo[] = [
    {
    task: "do homework",
    completed: false
  },
  {
    task: "eat breakfast",
    completed: true
  }
]
  people: Person[] = [
    { firstName: 'Ivan', lastName: 'Herndon' },
    { firstName: 'John', lastName: 'Doe' },

    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Ivan', lastName: 'Herndon' },

  ];

  height: string = '';
  counter: number = 0;

  constructor(private logger : LoggerService) {
    console.log(this.logger.log('in the App component'))
  }

  setHeight() {
    if ( this.counter ) {
      this.height = this.counter + 'px';
    }
  }

  resetHeight() {
    this.height = '';
  }

  goToTomorrow() {
    const todaysDate = this.today.getDate();
    this.today = new Date();

    this.today.setDate(todaysDate + 1);
  }

  trackByPeople(index: number, person: Person): string {
    return person.lastName;
  }

  madLibs = [
    {
      placeholder: '(adjective)',
      after: ''
    },
    {
      placeholder: '(adjective)',
      after: ''
    }
    ,
    {
      placeholder: '(noun)',
      after: 'jumping up and down in its tree. He'
    },
    {
      placeholder: '(verb, past test)',
      after: ''
    },
    {
      placeholder: '(adverb)',
      after: 'through the large tunnel that led to its'
    },
    {
      placeholder: '(adjective)',
      after: '.'
    },
    //     {
    //   placeholder: '(adjective)',
    //   after: ''
    // }
  ]

  returnTitle() {
    return this.title;
  }

  deleteItem(index) {
    this.todos.splice(index, 1);
    console.log(this.todos);
  }

  toggleTitle($event) {
    console.log($event);
    this.hideTitle = !this.hideTitle;
  }
}
