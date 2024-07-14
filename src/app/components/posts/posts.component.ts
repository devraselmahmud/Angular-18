import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  @Input() data: any;
  @Input() users: any;
  @Output() removeUser = new EventEmitter();
  @Output() addUserEvent = new EventEmitter();

  newUserName: any = '';

  setNewUserName(event: Event) {
    this.newUserName = (event.target as HTMLTextAreaElement).value;
  }

  addUser() {
    this.addUserEvent.emit(this.newUserName);
    console.log(this.newUserName)
    this.newUserName = '';
  }

  ngOnInit() {}
}
