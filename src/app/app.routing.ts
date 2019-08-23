import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersComponent } from './users/users.component';
export const routing  = RouterModule.forRoot([

  {
    path:'',
    component: UsersComponent
  },
  {
    path:'add',
    component: UsersComponent
  }
]);
