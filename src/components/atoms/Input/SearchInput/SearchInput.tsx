import React from 'react';
import {
  StyledIconWrapper,
  StyledInput,
  StyledSearchInput,
} from './SearchInput.style';
import { Icon } from '../../Icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onSearch?: (value: string) => void;
  iconSize?: 'small' | 'medium' | 'large'; // Optional size for the search icon
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  iconSize = 'small',
  onSearch,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch(event.currentTarget.value);
    }
    if (props.onKeyDown) {
      props.onKeyDown(event);
    }
  };
  return (
    <StyledSearchInput>
      <StyledIconWrapper>
        <Icon
          icon={faSearch}
          size={iconSize}
          color="rgba(255, 255, 255, 0.5)"
        />
      </StyledIconWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />
    </StyledSearchInput>
  );
};
