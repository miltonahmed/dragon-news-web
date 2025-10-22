import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LeftAside from '../Components/Home/LeftAssaid/LeftAside';
import RightAside from '../Components/Home/RightAside/RightAside';

const Root = () => {
  return (
    <div>
      <Header>
        <Header />
      </Header>
      <main className='max-w-11/12 mx-auto grid grid-cols-12'>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <LeftAside></LeftAside>
        </aside>
        <section className='col-span-6'>
          <Outlet />
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
