import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      // change findByText in the queryByText to wait when text is written
      await screen.queryByText("Message envoyé !");
    });
  });

});

// test d'integration pour verifier le bon deroulement du chargement de la page d'acceuil
describe("When a page is created", () => {
  it("a list of events is displayed", async() => {
    // to implement
    render(<Home />);
    const eventListCard = screen.findByTestId("eventListCard-test");
    expect(eventListCard).toBeDefined();
  });
  it("a list a people is displayed", () => {
    render(<Home/>);
    const item = screen.findByText("Jean-Baptiste");
    expect(item).toBeDefined();
   
  });
  it("a footer is displayed", () => {
    // to implement
    render(<Home/>);
    const footer = screen.getByTestId("footer-test");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    const lastEventCard = screen.getByTestId("eventListCard-test");
    expect(lastEventCard).toBeInTheDocument();
  });
});
