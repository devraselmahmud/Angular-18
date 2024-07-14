import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PostService} from "./services/post.service";
import {PostsComponent} from "./components/posts/posts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-communication';
  data: WritableSignal<any> = signal(null);


  users: WritableSignal<any> = signal([
    {id: Math.random().toString(8), name: 'Rasel'},
    {id: Math.random().toString(8), name: 'Mahmud'},
  ]);

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (res: any) => {
        this.data.set(res)
      },
      error: (err: any) => {
        console.error(err);
      }
    })

    // this.signalData.set(this.postService.getPosts());
  }


  removeUser(id: any) {
    this.users.set(this.users().filter((user: any) => user.id !== id))
  }

  addUser(name: string) {
    const userId = Math.random().toString(8);
    const newUser = {
      id: userId,
      name
    }

    this.users().push(newUser);
  }

}
