import { Component } from '@angular/core';
import { FlashScreenComponent } from "./flash-screen/flash-screen.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [FlashScreenComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

 showFlash = true;

  ngOnInit() {
    setTimeout(() => {
      this.showFlash = false;
    }, 10000); // 10 seconds
  }


}
