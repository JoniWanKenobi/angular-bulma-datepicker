This is a date picker done with Angular 5, Bulma.css and Moment.js.

It was done because I needed it and I liked the Bulma Calendar extension by wikiki, so I decided to kind of "port" that project to Angular.

I wrote a tutorial on Medium as I made it from scratch (well, with Bulma Calendar HTML/CSS: 
https://medium.com/@chiodigiovanni1/how-to-build-a-datepicker-with-angular-bulma-and-moment-js-part-1-54afcd565c2

Key objectives were to made the date picker configurable in terms of date availability depending on business logic, however complex. Right now, it's just configured as a booking system, i.e. to make past dates unavailable as well as dates further than one year in the future.

To turn it in to a real configurable component, there are still a couple of steps needed:

1-Create a ‘option’ object which will be an Input property and will contain all the configurations, including callback functions which can be passed from outside

2-Adjust all the functions to work according to the options

3-Let the component ‘emit’ the selected date, and maybe a configurable callback too

4-Add extra visualization leveraging Bulma Calendar css

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
