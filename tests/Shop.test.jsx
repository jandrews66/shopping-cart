import { render, waitFor } from "@testing-library/react";
import Shop from "../src/routes/shop.jsx";
import { BrowserRouter } from "react-router-dom";
import { vi } from 'vitest'

describe("Shop page", () => {
  it('should render all 6 product cards', async () => {
    const { container } = render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
  
    // Wait for data to be fetched
    await waitFor(() => {
      const cardContainer = container.querySelector('.cardContainer');
      const cardListItems = cardContainer.querySelectorAll('.card');
      expect(cardContainer).toBeInTheDocument();
      expect(cardListItems.length).toBe(6);
    });
  });
});