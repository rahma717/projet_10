import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
// Suite de tests pour le formulaire
describe("When Form is created", () => {
  // Test : Vérifie qu'une liste de champs est affichée
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });
// Sous-suite de tests pour le clic sur le bouton "Envoyer"
  describe("and a click is triggered on the submit button", () => {
// Test : Vérifie que le message de succès est affiché après le clic
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

// Suite de tests d'intégration pour vérifier le bon déroulement du chargement de la page d'accueil

describe("When a page is created", () => {
   // Test : Vérifie qu'une liste d'événements est affichée

  it("a list of events is displayed", async() => {
    // to implement
    render(<Home />);
    const eventListCard = screen.findByTestId("eventListCard-test");
    expect(eventListCard).toBeDefined();
  });
  // Test : Vérifie qu'une liste de personnes est affichée
  it("a list a people is displayed", () => {
    render(<Home/>);
    const item = screen.findByText("Jean-Baptiste");
    expect(item).toBeDefined();
   
  });
   // Test : Vérifie qu'un pied de page est affiché
  it("a footer is displayed", () => {
    // to implement
    render(<Home/>);
    const footer = screen.getByTestId("footer-test");
    expect(footer).toBeInTheDocument();
  });
  // Test : Vérifie qu'une carte d'événement, avec le dernier événement, est affichée
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    const lastEventCard = screen.getByTestId("eventListCard-test");
    expect(lastEventCard).toBeInTheDocument();
  });
});
