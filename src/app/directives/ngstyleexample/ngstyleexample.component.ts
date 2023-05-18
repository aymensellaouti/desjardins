import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngstyleexample',
  templateUrl: './ngstyleexample.component.html',
  styleUrls: ['./ngstyleexample.component.css']
})
export class NgstyleexampleComponent {
  @Input() color = 'blue';
  bgc = 'lightblue';
  font = 'verdana';

}
