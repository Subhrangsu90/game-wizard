import { Component } from '@angular/core';
import { FlashScreenComponent } from "./flash-screen/flash-screen.component";

@Component({
  selector: 'app-dashboard',
  imports: [FlashScreenComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
