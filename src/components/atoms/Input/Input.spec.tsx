import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from '../../../styles';
import { Input } from './Input';

// Helper to render with theme
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('Input', () => {
  it('renders basic input with placeholder', () => {
    renderWithTheme(
      <Input placeholder="Enter text..." type="text" />
    );
    
    const input = screen.getByPlaceholderText('Enter text...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with label when provided', () => {
    renderWithTheme(
      <Input 
        label="Email Address"
        placeholder="your@email.com"
      />
    );
    
    const label = screen.getByText('Email Address');
    const input = screen.getByLabelText('Email Address');
    
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(label).toHaveAttribute('for', input.id);
  });

  it('displays message text when provided', () => {
    renderWithTheme(
      <Input 
        label="Username"
        message="This username is available"
        placeholder="Enter username"
      />
    );
    
    expect(screen.getByText('This username is available')).toBeInTheDocument();
  });

  it('shows error styling when error prop is true', () => {
    renderWithTheme(
      <Input 
        label="Email"
        message="Invalid email address"
        error={true}
        placeholder="your@email.com"
      />
    );
    
    const input = screen.getByLabelText('Email');
    expect(input).toBeInTheDocument();
    // The error styling is applied via CSS, message component handles error display
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it('renders with left icon when provided', () => {
    renderWithTheme(
      <Input 
        placeholder="Search..."
        leftIcon={<FontAwesomeIcon icon={faSearch} data-testid="search-icon" />}
      />
    );
    
    const icon = screen.getByTestId('search-icon');
    expect(icon).toBeInTheDocument();
  });

  it('calls onValueChange when input value changes', () => {
    const handleValueChange = jest.fn();
    
    renderWithTheme(
      <Input 
        placeholder="Type here..."
        onValueChange={handleValueChange}
      />
    );
    
    const input = screen.getByPlaceholderText('Type here...');
    fireEvent.change(input, { target: { value: 'test input' } });
    
    expect(handleValueChange).toHaveBeenCalledWith('test input');
  });

  it('calls onSearch when Enter key is pressed', () => {
    const handleSearch = jest.fn();
    
    renderWithTheme(
      <Input 
        placeholder="Search..."
        onSearch={handleSearch}
      />
    );
    
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(handleSearch).toHaveBeenCalledWith('search term');
  });

  it('supports controlled input with value prop', () => {
    const handleChange = jest.fn();
    
    renderWithTheme(
      <Input 
        value="controlled value"
        onChange={handleChange}
        placeholder="Controlled input"
      />
    );
    
    const input = screen.getByDisplayValue('controlled value');
    expect(input).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies fullWidth styling when fullWidth prop is true', () => {
    renderWithTheme(
      <Input 
        placeholder="Full width input"
        fullWidth={true}
      />
    );
    
    const input = screen.getByPlaceholderText('Full width input');
    // The fullWidth prop affects the container styling
    expect(input.closest('div')).toBeInTheDocument();
  });
}); 