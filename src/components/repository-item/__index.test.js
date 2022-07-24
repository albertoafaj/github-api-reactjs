import { render, screen} from '@testing-library/react';
import React from 'react';
import ReposItem from './index'

describe('Profile', ()=>{
  test('should render a repositeries and starred', () => {
    render(<ReposItem name={undefined} linkToRepo={undefined} fullName={undefined} />);

    const reposEl = screen.getByText(/^full name:$/i);
    expect(reposEl ).toBeInTheDocument() 

  });

});
