import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  locale: string = 'en';
  selectedDate: any;

  constructor() { }

  ngOnInit() {
  }

  setSelectedDate(date){
    this.selectedDate = date;
  }

  canChangeMonthLogic(num, currentDate){
    currentDate.add(num, 'month');
    const minDate = moment().add(-1, 'month');
    const maxDate = moment().add(1, 'year');
    
    return currentDate.isBetween(minDate, maxDate);
  }

  isAvailableLogic(dateToCheck: any){
    if(dateToCheck.isBefore(moment(), 'day')){
      return false;
      } else {
          return true;
      }
  }

}
