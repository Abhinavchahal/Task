import { Component, Input } from '@angular/core';
//,computed, signal this are the predefined function by angular and signal is supported since angular 16
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  // get imagePath() {
  //     return 'assets/users/' + this.selectedUser.avatar
  // }
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  
  // avatar = input<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    // const randomIndex = Math.floor(Math.floor(Math.random() * DUMMY_USERS.length));
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);


  }
}
