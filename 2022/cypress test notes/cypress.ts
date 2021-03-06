//Perfect way to use cy.interface and cy.wait
cy.intercept(WAIT_APIS.agentSearch.endpoint).as(WAIT_APIS.agentSearch.alias);
if (deviceType === DeviceType.MOBILE) {
  cy.findByTitle("menu-open").parent().click();
}
cy.findByText("My Profile").click();
// eslint-disable-next-line jest/valid-expect-in-promise
cy.wait(`@${WAIT_APIS.agentSearch.alias}`)
  .its("response.body")
  .then((data) => {
    performAndWaitForApi(WAIT_APIS.agentSearch, () => {
      visit(`/people/${data.id}/agent-website-onboarding`);
    });
  });

assertMatchesRegex(`/people/${UUID_REGEX}/agent-website-onboarding`);

cy.findByText(`Real hosts your website for you!`).should("exist");

//Commands to use
//this contains allows partisial words as well.
cy.contains("Data").should("exist");

//get method
//this command will search for div element and also give how many div are available on that page.
cy.get("div");

//Search for that particular id 'div'
cy.get("div#root").should("exist");

cy.get("div#noroot").should("not.exist");

cy.get("div[id=root]").should("exist");

//'Start Learning' a button
//Way 1
cy.get("Start Learning"); //Not proper way of writting, what if the name of button change

//Way 2
cy.get(".(class_name) > div > a"); //() -> represents varriable   //not proper way since the class name changes according to the production and developement.

//Way 3
cy.get("[data-testid = (name_of_button)]"); //() -> represents varriable    //Best way

//assert or match if url is correct
cy.url().should("include", "/(url_name)");

//GO back to the previous page
cy.go("back");

//A method to show log
cy.log("(Message what ever you want to give you)");

//will work, and use of then method
cy.url().then((value) => {
  cy.log("current url is: ", value);
});

//Not work
cy.log("current url is: ", cy.url());

//only test to run after each saving
it.only("only test to run after each saving", () => {
  cy.get();
});

cy.get("[data-testid = (name_of_button)]").type("Rishav");

//How to set the localStorage values --->
const token =
  "gergegergergergergegrergergergergergergergergergergergerhrthrthjrjrtrtjrtj";
describe("Basic desktop test ", () => {
  before(() => {
    //It will occure once but before everything.
    cy.then(() => {
      window.localStorage.setItem("(name_of_item)", token); //to access the localStorage use -> window.localStorage.
    });
  });
});

//Command to pause cypress execution and resume using it's UI
cy.pause();

//Command to use debuger of JS
cy.debug(); //This completelly get you to the frozen state and then you can write test by seeing the page.

//Add timeout if the command is required.
cy.contains("Rishav is smart boy", { timeout: 10000 }).should("exist");

//Write special key like ctrl+c, enter, ctrl+d

const filename = Math.random();

cy.get("[data-testid=xterm]")
  .type("{ctrl}{c}")
  .type(`touch testscript.${filename}.js{enter}`);

cy.contains(`testscript.${filename}.js`).should("exist");

//Adding right click functionality.
cy.contains(`testscript.${filename}.js`).rightClick();

//To test inside a parent container
cy.findByText("About Content")
  .parent()
  .parent()
  .within(() => {
    cy.contains("I Work With:").should("exist");
  });
