This is a date picker done with Angular 5, Bulma.css and Moment.js.

It was done because I needed it and I liked the Bulma Calendar extension by wikiki, so I decided to kind of "port" that project to Angular.

I wrote a tutorial on Medium as I made it from scratch (well, with Bulma Calendar HTML/CSS): 
https://medium.com/@chiodigiovanni1/how-to-build-a-datepicker-with-angular-bulma-and-moment-js-part-1-54afcd565c2

Key objectives were to made the date picker configurable in terms of date availability depending on business logic, however complex.

You can control the behaviour through 1 property and 2 input callback, which you are meant to define in your parent component as inputs to the datepicker:

1) locale: string; 

  You can provide a locale, for example 'it', 'fr', etc. If you don't, the component will default to 'en'.

2) canChangeNavMonthLogic(num: number, currentDate: any): boolean; 

  it is passed to a number which is either -1 or 1 and the date currently displaying in the navigation. The sense is that when you click on the chevron back button this function will be fired (with -1, currentDate as parameters; +1, currrentDate if clicking the forward chevron button) in order to check if it's possible to navigate back from the currently displayed month. 
  
  In the parent component you find an example of such a function which disable the navigation in past months. If you don't provide this function the default will let you navigate indefinetely back and forth in time; 

3) isAvailableLogic(dateToCheck: any): boolean;

  when building the grid with the days numbers the component will check if the day should be displayed as available or not, passing the corrisponding date to be checked by the isAvailableLogic callback, which you should write in yur parent component and pass it to the datepicker as an input.

  As an example, I have disabled any day in the past in the parent component in this repo. But you can write whatever complex logic you want.

  If you don't provide any isAvailableLogic callback, then all the dates will be available for selection.
 
Either you configure it or use the defaults, make sure you catch the emitted selected date by defining a function to grab it and store it in a variable within the parent component: (emitSelectedDate) = "setSelectedDate($event)".

To do: 

1-Add extra visualization leveraging Bulma Calendar css;
2-Writing more callback examples;

You might want to fork it and contribute.



# AngularBulmaDatepicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
