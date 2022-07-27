
import { Fragment } from 'react';
import './App.css';
import 'swiper/css';
import { Routes, Route } from 'react-router-dom';
import Main from './layout/Main';
import HomePage from './page/HomePage';
import Banner from './components/banner/Banner';
import MoviePageV2 from './page/MoviePageV2';
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
                    <Route path='/movies' element={<MoviePageV2></MoviePageV2>}></Route>
                    <Route path='/movies/:movieId' element={<MovieDetailPage></MovieDetailPage>}></Route>
                </Route>
                <Route path="*" element={<>Page not found</>}></Route>
            </Routes>
        </Fragment>
    );
}

export default App;
