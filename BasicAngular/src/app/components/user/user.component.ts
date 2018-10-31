import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { TodoService } from '../../services/todo.service';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private name: string;
  private age: number;
  private email: string;
  // dictionary
  private address: {
    house_no: number,
    village_no: number,
    subdistrict: string,
    district: string,
    province: string,
    postcode: number,
  };
  todoList: Todo[];
  // array
  private skills: string[];


  constructor(private todoService: TodoService) {

   }

  ngOnInit() {
    this.name = 'Kittituch Tunprakongsuk';
    this.age = 27;
    this.email = 'kitunpra@gmail.com';
    this.address = {
      house_no: 157,
      village_no: 1,
      subdistrict: 'HUAITHALAENG',
      district: 'HUAITHALAENG',
      province: 'NAKHONRATCHASIMA',
      postcode: 30240
    };

    this.skills = ['Html/CSS', 'JavaScript', 'NodeJS', 'NLabView', 'MySQL', 'ReactJS', 'Angular' ];
    // Call service
    // this.todoList = this.todoService.getTodoList();


  }


  addSkill(skill) {
    this.skills.unshift(skill);
    return false;
  }
  removeSkill(skill) {
    this.skills.forEach(( e , index) => {
      if (e === skill) {
        this.skills.splice(index, 1);
      }
    });
  }
}


