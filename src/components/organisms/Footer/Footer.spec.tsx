import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Footer } from './Footer';
import { FooterLinkItem, SocialLinkItem } from './Footer.types';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

  // Dynamic Configuration Tests
  describe('Dynamic Configuration', () => {
    describe('Custom Links', () => {
      it('should render custom footer links', () => {
        const customLinks: FooterLinkItem[] = [
          {
            title: 'Product',
            links: [
              { name: 'Features', url: '#features' },
              { name: 'Pricing', url: '#pricing' },
            ],
          },
          {
            title: 'Company',
            links: [
              { name: 'About Us', url: '#about' },
              { name: 'Contact', url: '#contact' },
            ],
          },
        ];

        renderWithTheme(<Footer customLinks={customLinks} />);

        expect(screen.getByRole('heading', { name: 'Product' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
      });

      it('should call custom link onClick handlers', () => {
        const mockOnClick = jest.fn();
        const customLinks: FooterLinkItem[] = [
          {
            title: 'Actions',
            links: [
              { name: 'Download', url: '#download', onClick: mockOnClick },
            ],
          },
        ];

        renderWithTheme(<Footer customLinks={customLinks} />);

        const downloadLink = screen.getByRole('link', { name: 'Download' });
        fireEvent.click(downloadLink);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

      it('should hide default links when custom links are provided', () => {
        const customLinks: FooterLinkItem[] = [
          {
            title: 'Custom',
            links: [{ name: 'Custom Link', url: '#custom' }],
          },
        ];

        renderWithTheme(<Footer customLinks={customLinks} />);

        // Default links should not be present
        expect(screen.queryByRole('heading', { name: 'Company' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Communities' })).not.toBeInTheDocument();
        
        // Custom links should be present
        expect(screen.getByRole('heading', { name: 'Custom' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Custom Link' })).toBeInTheDocument();
      });
    });

    describe('Custom Social Links', () => {
      it('should render custom social media links', () => {
        const customSocialLinks: SocialLinkItem[] = [
          { icon: faGithub, url: '#github', label: 'GitHub' },
          { icon: faLinkedin, url: '#linkedin', label: 'LinkedIn' },
        ];

        renderWithTheme(<Footer customSocialLinks={customSocialLinks} />);

        expect(screen.getByLabelText('Visit our GitHub page')).toBeInTheDocument();
        expect(screen.getByLabelText('Visit our LinkedIn page')).toBeInTheDocument();
      });

      it('should call custom social link onClick handlers', () => {
        const mockOnClick = jest.fn();
        const customSocialLinks: SocialLinkItem[] = [
          { icon: faGithub, url: '#github', label: 'GitHub', onClick: mockOnClick },
        ];

        renderWithTheme(<Footer customSocialLinks={customSocialLinks} />);

        const githubLink = screen.getByLabelText('Visit our GitHub page');
        fireEvent.click(githubLink);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });

      it('should hide default social links when custom social links are provided', () => {
        const customSocialLinks: SocialLinkItem[] = [
          { icon: faGithub, url: '#github', label: 'GitHub' },
        ];

        renderWithTheme(<Footer customSocialLinks={customSocialLinks} />);

        // Default social links should not be present
        expect(screen.queryByLabelText('Visit our Instagram page')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Visit our Twitter page')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Visit our Facebook page')).not.toBeInTheDocument();
        
        // Custom social links should be present
        expect(screen.getByLabelText('Visit our GitHub page')).toBeInTheDocument();
      });
    });

    describe('Visibility Controls', () => {
      it('should hide links when showLinks is false', () => {
        renderWithTheme(<Footer showLinks={false} />);

        expect(screen.queryByRole('heading', { name: 'Company' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Communities' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Useful Links' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Spotify Plans' })).not.toBeInTheDocument();
      });

      it('should hide social links when showSocialLinks is false', () => {
        renderWithTheme(<Footer showSocialLinks={false} />);

        expect(screen.queryByLabelText(/Visit our .* page/)).toBeNull();
      });

      it('should hide copyright when showCopyright is false', () => {
        renderWithTheme(<Footer showCopyright={false} />);

        expect(screen.queryByText('© 2024 Spotify AB')).not.toBeInTheDocument();
      });

      it('should show custom copyright text', () => {
        const customCopyright = '© 2024 My Awesome Company';
        renderWithTheme(<Footer copyrightText={customCopyright} />);

        expect(screen.getByText(customCopyright)).toBeInTheDocument();
        expect(screen.queryByText('© 2024 Spotify AB')).not.toBeInTheDocument();
      });
    });

    describe('Minimal Configuration', () => {
      it('should render minimal footer with all features disabled', () => {
        renderWithTheme(
          <Footer 
            showLinks={false} 
            showSocialLinks={false} 
            showCopyright={false} 
          />
        );

        // Should not show any links, social media, or copyright
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
        expect(screen.queryByText(/©/)).not.toBeInTheDocument();
        
        // Should still have the footer container
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
      });

      it('should render only copyright when other features are disabled', () => {
        const customCopyright = '© 2024 Minimal Footer';
        renderWithTheme(
          <Footer 
            showLinks={false} 
            showSocialLinks={false} 
            copyrightText={customCopyright}
          />
        );

        expect(screen.getByText(customCopyright)).toBeInTheDocument();
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
        expect(screen.queryByLabelText(/Visit our .* page/)).toBeNull();
      });
    });

    describe('Mixed Configuration', () => {
      it('should render custom links with default social links', () => {
        const customLinks: FooterLinkItem[] = [
          {
            title: 'Custom',
            links: [{ name: 'Custom Link', url: '#custom' }],
          },
        ];

        renderWithTheme(<Footer customLinks={customLinks} />);

        // Custom links should be present
        expect(screen.getByRole('heading', { name: 'Custom' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Custom Link' })).toBeInTheDocument();
        
        // Default social links should still be present
        expect(screen.getByLabelText('Visit our Instagram page')).toBeInTheDocument();
        expect(screen.getByLabelText('Visit our Twitter page')).toBeInTheDocument();
        expect(screen.getByLabelText('Visit our Facebook page')).toBeInTheDocument();
      });

      it('should render default links with custom social links', () => {
        const customSocialLinks: SocialLinkItem[] = [
          { icon: faGithub, url: '#github', label: 'GitHub' },
        ];

        renderWithTheme(<Footer customSocialLinks={customSocialLinks} />);

        // Default links should be present
        expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Communities' })).toBeInTheDocument();
        
        // Custom social links should be present
        expect(screen.getByLabelText('Visit our GitHub page')).toBeInTheDocument();
        
        // Default social links should not be present
        expect(screen.queryByLabelText('Visit our Instagram page')).not.toBeInTheDocument();
      });
    });
  });
}); 