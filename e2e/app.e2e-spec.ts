import { AppPage } from './app.po';

describe('crudoperation App', () => {
  let page: AppPage;
  let formsubmitButton = element.all(by.css('app-root form button[type=submit]'));  
  let tableActionElements = element.all(by.css('app-root table td span'));
  let employeeRows = element.all(by.css('app-root table tbody tr'));
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Reactive Forms');
  });
  it('should count the number of interactive fields', () => {
	expect(page.getFormElements().count()).toEqual(3);
  });  
  it('should count the buttons visible for user', () => {
	expect(formsubmitButton.count()).toEqual(1);
  });
  it('should validate the firstname text field', () => {
    let firstnameElement = element.all(by.css("app-root input[formControlName=firstname]"));
    firstnameElement.click();
    firstnameElement.sendKeys(protractor.Key.TAB);
    let errormessage = element(by.css("app-root div.error:nth-child(2n)")).getText();
	expect(errormessage).toEqual("First Name is required");
  });
  it('should validate the lastname text field', () => {
    let lastnameElement = element.all(by.css("app-root input[formControlName=lastname]"));
    lastnameElement.sendKeys(protractor.Key.TAB);
    let errormessage = element(by.css("app-root div.error:nth-child(4n)")).getText();
	expect(errormessage).toEqual("Last Name is required");
  });
   it('should validate the age text field', () => {
    let ageElement = element.all(by.css("app-root input[formControlName=age]"));
    ageElement.sendKeys(protractor.Key.TAB);
    let errormessage = element(by.css("app-root div.error:nth-child(6n)")).getText();
	expect(errormessage).toEqual("Age is required");
  });
  it('should display employee details table', () => {
	page.fillFirstEmployee();
	formsubmitButton.click();
	expect(page.getEmpTableHeading()).toEqual('Employee Details');	
  });
  it('should display count of actions for a user to work with', () => {
	expect(tableActionElements.count()).toEqual(2);
  });
  it('should display count of employee records', () => {
  	page.fillSecondEmployee();
	formsubmitButton.click();
	expect(employeeRows.count()).toEqual(2);
  });
  it('should delete an employee record', () => {
	page.getDeleteElement().click();
	expect(employeeRows.count()).toEqual(1);
  });  
  it('should update the employee record', () => { 
    page.getEmployeeUpdate().click();
    element.all(by.css("app-root input[formControlName=firstname]")).sendKeys("kumar");
    page.getUpdateButton().click();
    expect(page.getFirstnameElement()).toEqual("Arunkumar");
  });
});
