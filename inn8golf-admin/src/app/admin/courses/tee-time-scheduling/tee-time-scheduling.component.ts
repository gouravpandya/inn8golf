import { Component, OnInit } from '@angular/core';
import { TeeTimeScheduling } from '../models/tee-time.model';

@Component({
  selector: 'app-tee-time-scheduling',
  templateUrl: './tee-time-scheduling.component.html',
  styleUrls: ['./tee-time-scheduling.component.css']
})
export class TeeTimeSchedulingComponent implements OnInit {
  teeTimeScheduling: TeeTimeScheduling;

  constructor() {
    this.teeTimeScheduling = new TeeTimeScheduling();
  }
  ngOnInit() {
  }

  selectedCourse(): void {
  }

  selectedGolfer(): void {
  }

  onSelect(event: any) {
    const hour = new Date(event).getHours();
    const min = new Date(event).getMinutes();
    if (min < 10) {
      this.teeTimeScheduling.slotTime = `${hour}:0${min}`;
    } else {
      this.teeTimeScheduling.slotTime = `${hour}:${min}`;
    }
  }

  submit(form): void {
    console.log(this.teeTimeScheduling, form)
  }
}
