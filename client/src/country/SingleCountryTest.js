import { render, screen, fireEvent } from '@testing-library/react';
import SingleCountry from './SingleCountry';

describe('Single Country component', () => {

    test('renders header Task 1', () => {
        render(<SingleCountry />);

        const linkElement = screen.getByText(/Task 1/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Please enter a country name prompt', () => {
        render(<SingleCountry />);

        const linkElement = screen.getByText(/Please enter a country name/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Country Name', () => {
        render(<SingleCountry />);

        const countryName = screen.getByTestId('p');
        expect(countryName).toBeInTheDocument();
    });
})
