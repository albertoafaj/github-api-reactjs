import { render, screen} from '@testing-library/react';
import React from 'react';
import Profile from './index'


describe('Profile', ()=>{
  test('should render a username, company, blog ansd a quantity of Followers, Followings, Gists and Repos ', () => {
    render(<Profile />);

    const username = screen.getByText(/Username/i);
    const company = screen.getByText(/company/i);
    const blog = screen.getByText(/blog/i);
    const Followers = screen.getByText(/Followers/i);
    const Followings = screen.getByText(/Followings/i);
    const Gits = screen.getByText(/Gits/i);
    const Repos = screen.getByText(/^Repos$/i);
    const imgUser = screen.getByAltText(/User picture/i);
    expect(username).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(Followers).toBeInTheDocument();
    expect(Followings).toBeInTheDocument();
    expect(Gits).toBeInTheDocument();
    expect(Repos).toBeInTheDocument();
    expect(imgUser).toBeInTheDocument();

  });

});
