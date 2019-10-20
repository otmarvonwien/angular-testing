import { UsersComponent } from './users.component';
import { of } from 'rxjs/observable/of';

describe(`Users Component`, () => {
  let component: UsersComponent;
  const fakeUser = {id: 1, name: 'fake'};
  const fakeUserService = {
    getUsers: () => of([fakeUser]),
    httpClient: {}
  } as any;

  beforeEach(() => {
    component = new UsersComponent(fakeUserService);
  });

  it(`should have a component`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have a list of users`, () => {
    component.ngOnInit();
    component.users$.subscribe(users => {
      console.log(users);
      expect(users).toEqual([fakeUser]);
    });
  });
});


// import { UsersComponent } from './users.component';
// import { of } from 'rxjs/observable/of';
// import { timer } from 'rxjs/observable/timer';
// import { UserService } from '../../services/user.service';
// import { mapTo } from 'rxjs/operators';

// describe(`Users Component`, () => {
//     let component: UsersComponent;
//     const fakeUser = {id: 1, name: 'fake'};
//     // const fakeUserService = {
//     //     getUsers: () => of([fakeUser]),
//     //     httpClient: {}
//     // } as any;

//     // const fakeUserService = jasmine.createSpyObj('userService', ['getUsers']);
//     const userService = new UserService(null);
//     beforeEach(() => {
//         component = new UsersComponent(userService);
//     });

//     it(`should have a component`, () => {
//         expect(component).toBeTruthy();
//     });

//     it(`should have a list of users`, () => {
//         const spy = spyOn(userService, 'getUsers').and.returnValue(of([fakeUser]));
//         component.ngOnInit();
//         component.users$.subscribe(users => {
//             console.log(users);
//             expect(users).toEqual([fakeUser]);
//             expect(spy).toHaveBeenCalled();
//             expect(spy).toHaveBeenCalledWith();
//             expect(spy).toHaveBeenCalledTimes(1);
//         });
//     });

//     it(`should have a list of users`, (done) => {
//         // const spy = spyOn(userService, 'getUsers').and.returnValue(of([fakeUser]));
//         const spy = spyOn(userService, 'getUsers').and.returnValue(timer(1000).pipe(mapTo([fakeUser])));
//         component.ngOnInit();
//         component.users$.subscribe(users => {
//             console.log(users);
//             expect(users).toEqual([fakeUser]);
//             done();
//         });
//     });
// });
