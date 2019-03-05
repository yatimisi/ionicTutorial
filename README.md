# ionic's Menu and Tabs
>https://youtu.be/CYNZ6QTbB3A?t=7022

This is create method for Menu and Tabs .

### Please run this：
```cmd
First clone and cd this repositorie.

$ npm install

$ ionic cordova prepare [ios/android/browser] //unessential
...(Y/n)? [Y]

$ ionic serve -l
...(Y/n)? [Y]
```

## Create Menu's Step

#### app.component.ts
```typeScript
...
export class AppComponent {
    public appMenu = [
        {title: 'Test1', url: '/test1', icon: 'list'},
        {title: 'Test2', url: '/test2', icon: 'add'},
        {title: 'Test3', url: '/test3', icon: 'trash'}
    ];
    constructor( 
...
```

#### app.component.html
```html
<ion-app>
  <ion-split-pane>
    <ion-menu type="overlay">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            Menu
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-menu-toggle auto-hide="false" *ngFor="let item of appMenu">
            <ion-item [routerDirection]="'root'" [routerLink]="item.url">
              <ion-icon slot="start" [name]="item.icon"></ion-icon>
              <ion-label>{{ item.title }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet main></ion-router-outlet>
  </ion-split-pane>
</ion-app>
```

#### home.page.html
```html
...
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
...
```


## Create Tabs's Step

```cmd
ionic g page tabs 
```

#### app-routing.module.ts
```typeScript
const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];
```

#### tabs.module.ts
```typeScript
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      { path: '', redirectTo: '<firstPath>' , pathMatch: 'full'},
      { path: '<pathName>', loadChildren: '<pathModuleFile>#<pathModule>' },
      { path: 'test1', loadChildren: '../test1/test1.module#Test1PageModule' }
    ]
  }
];
```

#### tabs.page.html
```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="<tab>">
      <ion-icon name="<iconName>"></ion-icon>
      <ion-label><tabName></ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```
