import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LeftAside from '../Components/Home/LeftAside';
import RightAside from '../Components/Home/RightAside';

const Root = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='max-w-11/12 mx-auto grid grid-cols-12'>
        <aside className='col-span-3'>
          <LeftAside></LeftAside>
        </aside>
        <section className='col-span-6'>
          <Outlet />
        </section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
