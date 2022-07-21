
import { Fragment } from 'react';
import './App.css';

import MovieList from './cpmonents/movie/MovieList';

function App() {
  return (
    <Fragment>
      <header className='header flex items-center justify-center gap-x-5 text-white py-10 mb-10'>
        <span className='text-red-700'>Home</span>
        <span>Movie</span>
      </header>
      <section className='banner h-[400px] page-container mb-20'>
        <div className='w-full h-full rounded-lg relative'>
          <div className='overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg'></div>
          <img alt='' src='https://www.pdvg.it/wp-content/uploads/2019/04/avengers-endgame-sign-2.jpg' className='w-full h-full rounded-lg object-cover'></img>
          <div className='absolute left-5 bottom-5 w-full text-white'>
            <h2 className='font-bold text-3xl mb-5'>Avenders: Endgame</h2>
            <div className='flex items-center gap-x-3 mb-8'>
              <span className='py-2 px-4 border border-white rounded-md'>Adventure</span>
              <span className='py-2 px-4 border border-white rounded-md'>Adventure</span>
              <span className='py-2 px-4 border border-white rounded-md'>Adventure</span>
            </div>
            <button className='py-3 px-6 rounded-lg text-white bg-red-600 font-medium'>Watch now</button>
          </div>
        </div>
      </section>
      <section className='movies-layout page-container mb-20'>
        <h2 className='capitalize text-white mb-5 text-3xl font-bold'>Now play</h2>
        <MovieList></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
