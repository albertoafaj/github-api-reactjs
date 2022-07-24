import { render, screen} from '@testing-library/react';
import React from 'react';
import Repositories from './index'

describe('Profile', ()=>{
  test('should render a repositeries and starred', () => {
    render(<Repositories />);

    const reposEl = screen.getByText(/^Repositories$/i);
    const starredEl = screen.getByText(/Starred/i);
    expect(reposEl ).toBeInTheDocument() 
    expect(starredEl).toBeInTheDocument();

  });

});
