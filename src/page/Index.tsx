import { FC } from 'react';
import reactLogo from '../assets/react.svg';
import reduxLogo from "../assets/redux.png";
import sagaLogo from "../assets/saga.png";
import { useNavigate } from 'react-router-dom';

const Index: FC = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/home");
    }
    return (
        <>
            <main className='main-container'>
                <section className='main-content'>
                    <div className="flex items-center justify-center gap-2">
                        <img src={reduxLogo} className="w-40 h-40 logo" alt="Redux logo" />
                        <img src={reactLogo} className="w-40 h-40 logo" alt="React logo" />
                        <img src={sagaLogo} className="w-40 h-40 logo" alt="saga logo" />
                    </div>
                    <h1 className='text-5xl'>
                        <b className='text-redux'>Redux</b>
                        {" "} + {" "}
                        <b className='text-react'>React</b>
                        {" "} + {" "}
                        <b className='text-saga'>Saga</b>
                    </h1>
                    <div className="card">
                        <div className='max-w-3xl h-max'>
                            <p className='p-3 text-xl font-mono leading-loose'>
                                This app is designed to facilitate the appropriate usage of Redux, React, and Saga in case of API fetch requests depending on the factors of resolve and reject. The goal is to reduce the need for multiple instances of useState within local components. By following this tutorial, we will learn how to effectively utilize Redux and Saga, consolidating separate states into a single global state for our React application.</p>
                        </div>
                        <p className="read-the-docs p-3">
                            click the below button to navigate
                        </p>
                        <button
                            onClick={handleButtonClick}
                            className='w-28 h-10 m-7 bg-white text-black hover:text-red-700 font-semibold rounded-lg capitalize hover:bg-purple-50'>
                            get started
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Index;
