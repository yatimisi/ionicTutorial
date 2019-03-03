# ionic's Menu and Tabs
>https://youtu.be/CYNZ6QTbB3A?t=7022

This is create method for Menu and Tabs .

### Please run this：
```cmd
$ ionic cordova prepare [ios/android/browser] 
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
