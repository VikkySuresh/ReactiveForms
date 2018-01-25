import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  } 
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getFirstnameElement() {
    return element(by.css('app-root table tr:first-of-type td:first-of-type')).getText();
  }
  getFormElements() {
    return element.all(by.css('app-root form input'));
  }
  getEmpTableHeading() {
    return element(by.css('app-root div.employee-details-table h3')).getText();
  }
  getDeleteElement() {
    return element.all(by.css('app-root table tr:first-of-type span:nth-child(2n)'));
  }
  fillFirstEmployee() {
    element.all(by.css("app-root input[formControlName=firstname]")).sendKeys("vignesh");
    element.all(by.css("app-root input[formControlName=lastname]")).sendKeys("suresh");
    element.all(by.css("app-root input[formControlName=age]")).sendKeys("23");   
  }
  fillSecondEmployee() {
    element.all(by.css("app-root input[formControlName=firstname]")).sendKeys("Arun");
    element.all(by.css("app-root input[formControlName=lastname]")).sendKeys("kumar");
    element.all(by.css("app-root input[formControlName=age]")).sendKeys("45");  
  }
  getEmployeeUpdate() {
    return element.all(by.css('app-root table tr:first-of-type span:first-child'));
  }
  getUpdateButton() {
    return element.all(by.css('app-root form button[type=button]:first-of-type'));
  }
}
