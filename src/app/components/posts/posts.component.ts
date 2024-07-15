import {
  Component,
  computed,
  input,
  OnInit, output,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  data = input<any>();
  users = input<any>();
  removeUser = output<any>();
  addUserEvent = output<any>();

  newUserName: any = '';

  setNewUserName(event: Event) {
    this.newUserName = (event.target as HTMLTextAreaElement).value;
  }

  addUser() {
    this.addUserEvent.emit(this.newUserName);
    console.log(this.newUserName)
    this.newUserName = '';
  }

  calc: WritableSignal<number> = signal(8);
  calculation: Signal<number> = computed(() => this.calc() * 3);
  decrease: Signal<number> = computed(() => this.calc() / 2);
  onClick() {
    return this.calc.set(this.calculation());
  }
  onDecrease() {
    return this.calc.set(this.decrease());
  }

  ngOnInit() {}
}
