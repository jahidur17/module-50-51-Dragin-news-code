import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftSide from '../components/HomeLayput/LeftSide';
import RightAside from '../components/HomeLayput/RightAside';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Header></Header>
          <section className="w-11/12 mx-auto my-3">
            <LatestNews></LatestNews>
          </section>
          <nav className="w-11/12 mx-auto my-3">
            <NavBar></NavBar>
          </nav>
        </header>
        <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
          <aside className="col-span-3 sticky top-0 h-fit">
            <LeftSide></LeftSide>
          </aside>
          <section className="main_nav col-span-6">
            <Outlet></Outlet>
          </section>
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default HomeLayout;