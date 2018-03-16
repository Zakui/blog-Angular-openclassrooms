import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  post = [
    {
      title: 'mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIt: 1,
      created_at: new Date()
    },
    {
      title: 'mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIt: 0,
      created_at: new Date()
    },
    {
      title: 'un nouveau post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIt: 0,
      created_at: new Date()
    }
  ]

}
