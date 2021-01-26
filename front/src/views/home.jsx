import React from 'react';
import AlgoUno from '../components/landingpage/algo1';
import AlgoDos from '../components/landingpage/algo2';
import AlgoTres from '../components/landingpage/algo3';
// import Carousel from '../components/landingpage/carousel';
import Form from '../components/landingpage/form';

const Home = () => {
    return (
        <>
        <div>

            {/* <Carousel /> */}
            <AlgoUno />
            <AlgoDos />
            <AlgoTres />
            <Form id="form" />
        </div>
        </>
    );
}

export default Home;