import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Footer } from './Footer';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Footer Component', () => {
  // TC1: Basic rendering
  it('should render footer with all link sections', () => {
    renderWithTheme(<Footer />);
    
    // Check for section headings
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Communities' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Spotify Plans' })).toBeInTheDocument();
  });

  // TC2: Footer links render correctly
  it('should render all footer links', () => {
    renderWithTheme(<Footer />);
    
    // Test a few key links from different sections
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'For Artists' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Support' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Premium Individual' })).toBeInTheDocument();
  });

  // TC3: Social media icons render correctly
  it('should render social media icons', () => {
    renderWithTheme(<Footer />);
    
    // Check that we have multiple social icons
    const socialLinks = screen.getAllByLabelText(/Visit our .* page/);
    expect(socialLinks.length).toBe(3); // Instagram, Twitter, Facebook
    
    // Check for specific social media links
    expect(screen.getByLabelText('Visit our Instagram page')).toBeInTheDocument();
    expect(screen.getByLabelText('Visit our Twitter page')).toBeInTheDocument();
    expect(screen.getByLabelText('Visit our Facebook page')).toBeInTheDocument();
  });

  // TC4: Footer has proper semantic structure
  it('should have proper semantic structure', () => {
    renderWithTheme(<Footer />);
    
    // Footer should have contentinfo role
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  // TC5: Links have correct href attributes
  it('should have correct href attributes on links', () => {
    renderWithTheme(<Footer />);
    
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toHaveAttribute('href', '#');
  });

  // TC6: Social links open in new tabs
  it('should have social links that open in new tabs', () => {
    renderWithTheme(<Footer />);
    
    const socialLinks = screen.getAllByLabelText(/Visit our .* page/);
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  // TC7: Footer link hover states work
  it('should handle footer link hover states', () => {
    renderWithTheme(<Footer />);
    
    const aboutLink = screen.getByRole('link', { name: 'About' });
    
    // Test hover interactions
    fireEvent.mouseEnter(aboutLink);
    expect(aboutLink).toBeInTheDocument();
    
    fireEvent.mouseLeave(aboutLink);
    expect(aboutLink).toBeInTheDocument();
  });

  // TC8: Social icon hover states work
  it('should handle social icon hover states', () => {
    renderWithTheme(<Footer />);
    
    const socialLinks = screen.getAllByLabelText(/Visit our .* page/);
    const firstSocialLink = socialLinks[0];
    
    // Test hover interactions
    fireEvent.mouseEnter(firstSocialLink);
    expect(firstSocialLink).toBeInTheDocument();
    
    fireEvent.mouseLeave(firstSocialLink);
    expect(firstSocialLink).toBeInTheDocument();
  });

  // TC9: Custom className prop works
  it('should accept and apply custom className', () => {
    renderWithTheme(<Footer className="custom-footer" />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('custom-footer');
  });

  // TC10: Component handles additional props
  it('should handle additional props correctly', () => {
    renderWithTheme(<Footer data-testid="footer-test" />);
    
    const footer = screen.getByTestId('footer-test');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('role', 'contentinfo');
  });
}); 