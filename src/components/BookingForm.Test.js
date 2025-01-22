import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm labels", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();


  render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);

  const dateLabel = screen.getByText("Choose date");
  expect(dateLabel).toBeInTheDocument();

  const timeLabel = screen.getByText("Choose time");
  expect(timeLabel).toBeInTheDocument();

  const guestsLabel = screen.getByText("Number of guests");
  expect(guestsLabel).toBeInTheDocument();

  const occasionLabel = screen.getByText("Occasion");
  expect(occasionLabel).toBeInTheDocument();

  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeInTheDocument();
});
