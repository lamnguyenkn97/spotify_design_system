import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Skeleton } from './Skeleton';
import { SkeletonProps } from './Skeleton.types';

// Test wrapper component
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);

// Helper function to render Skeleton with theme
const renderSkeleton = (props: Partial<SkeletonProps> = {}) => {
  return render(
    <TestWrapper>
      <Skeleton {...props} />
    </TestWrapper>
  );
};

describe('Skeleton Component', () => {
  // ===== BASIC RENDERING =====
  it('renders skeleton with default props when loading', () => {
    renderSkeleton();
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute('aria-label', 'Loading...');
  });

  // ===== LOADING STATE BEHAVIOR =====
  it('shows children when not loading and children provided', () => {
    renderSkeleton({
      loading: false,
      children: <div>Test Content</div>
    });
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('renders nothing when not loading and no children', () => {
    const { container } = renderSkeleton({ loading: false });
    
    expect(container.firstChild).toBeNull();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  // ===== VARIANT STYLES =====
  it('applies correct styles for all variants', () => {
    const variants: Array<{ variant: SkeletonProps['variant'], expectedClass?: string }> = [
      { variant: 'text' },
      { variant: 'rectangular' },
      { variant: 'circular' },
      { variant: 'rounded' }
    ];

    variants.forEach(({ variant }) => {
      const { unmount } = renderSkeleton({ variant });
      const skeleton = screen.getByRole('status');
      
      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveStyle('background-color: rgba(255, 255, 255, 0.12)'); // grey2
      
      unmount();
    });
  });

  // ===== ANIMATION BEHAVIOR =====
  it('applies correct animation styles', () => {
    const animations: SkeletonProps['animation'][] = ['pulse', 'wave', 'none'];

    animations.forEach((animation) => {
      const { unmount } = renderSkeleton({ animation });
      const skeleton = screen.getByRole('status');
      
      expect(skeleton).toBeInTheDocument();
      
      unmount();
    });
  });

  // ===== CUSTOM DIMENSIONS =====
  it('applies custom width and height correctly', () => {
    renderSkeleton({
      width: 200,
      height: 100
    });
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle('width: 200px');
    expect(skeleton).toHaveStyle('height: 100px');
  });

  it('handles string dimensions correctly', () => {
    renderSkeleton({
      width: '50%',
      height: '2rem'
    });
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle('width: 50%');
    expect(skeleton).toHaveStyle('height: 2rem');
  });

  // ===== CIRCULAR VARIANT SPECIAL BEHAVIOR =====
  it('makes circular skeleton square when only width provided', () => {
    renderSkeleton({
      variant: 'circular',
      width: 50
    });
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle('width: 50px');
    expect(skeleton).toHaveStyle('height: 50px');
  });

  // ===== ACCESSIBILITY & PROPS =====
  it('applies custom className and maintains accessibility', () => {
    renderSkeleton({
      className: 'custom-skeleton',
      loading: true
    });
    
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('custom-skeleton');
    expect(skeleton).toHaveAttribute('aria-label', 'Loading...');
    expect(skeleton).toHaveAttribute('role', 'status');
  });
}); 