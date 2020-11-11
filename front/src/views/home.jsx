import React from 'react';
import AlgoUno from '../components/landingpage/algo1';
import AlgoDos from '../components/landingpage/algo2';
import Carousel from '../components/landingpage/carousel';
import Form from '../components/landingpage/form';

const Home = () => {
    return (
        <>
            <Carousel />
            <AlgoUno />
            <AlgoDos />
            <Form />
        </>
    );
}

export default Home;