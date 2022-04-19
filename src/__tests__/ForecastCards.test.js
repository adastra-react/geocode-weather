import { render, screen, cleanup } from "@testing-library/react"
import ForecastCards from "../Components/ForecastCards"
import Forecast from "../Components/Forecast"
import "jest-canvas-mock";

afterEach(() => {
    cleanup();
})

test('should render forecast card component', () => {
    render(<Forecast/>);
    const ForecastElement = screen.getByTestId('forecast-1');
    expect(ForecastElement).toBeInTheDocument();
})