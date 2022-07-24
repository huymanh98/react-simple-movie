
import { Fragment } from 'react';
import './App.css';
import 'swiper/css';
import { Routes, Route } from 'react-router-dom';
import Main from './layout/Main';
import HomePage from './page/HomePage';
import Banner from './components/banner/Banner';
import MoviePage from './page/MoviePage';
import MovieDetailPage from './page/MovieDetailPage';

function App() {
    return (
        <Fragment>
            <Routes>
                <Route element={<Main></Main>}>
                    <Route path='/' element={
                        <>
                            <Banner></Banner>
                            <HomePage></HomePage>
                        </>
                    }></Route>
                    <Route path='/movies' element={<MoviePage></MoviePage>}></Route>
                    <Route path='/movies/:movieId' element={<MovieDetailPage></MovieDetailPage>}></Route>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
