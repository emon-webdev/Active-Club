import React, { useEffect, useState } from 'react';
import logo from '../img/logo-fitness.png';
import Exercise from './Exercise';


const Home = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, [])


    return (
        <div className='home-page'>

            <div className="exercise-area">
                <div className="exercise-container pt-[60px]">
                    <div className='flex items-center '>
                        <img className="w-[90px] h-[60px] mr-3" src={logo} alt="" srcset="" />
                        <span className='text-4xl font-bold text-blue-700 drop-shadow'>
                        GYM CLUB
                        </span>
                    </div>
                    <h2 className='text-xl font-bold'>Select today's exercise</h2>
                    <div className="exercise-content ">
                        {
                            exercises.map(exercise =>
                                <Exercise
                                    key={exercise.id}
                                    exercise={exercise}
                                />
                            )
                        }
                    </div>
                </div>

                <div className="exercise-schedule p-4 shadow-lg">
                    <div className="profile-info flex items-center">
                        <img src="" alt="" srcset="" />
                        <div>
                            <h2>Emon Hossain</h2>
                            <p>Junior Web Developer</p>
                        </div>
                    </div>
                    <div className='break-content mb-4'>
                        <h2 className='text-xl font-bold mb-3'>Add A Break</h2>
                        <div className='break-time bg-slate-300 rounded-lg p-3'>
                            <button class="btn btn-circle btn-outline">
                                10s
                            </button>
                            <button class="btn btn-circle btn-outline">
                                10s
                            </button>
                            <button class="btn btn-circle btn-outline">
                                10s
                            </button>
                        </div>
                    </div>
                    <div className="exercise-details">
                        <h2 className='text-xl font-bold mb-3'>Exercise Details</h2>
                        <h3>exercise time</h3>
                        <h3>exercise time</h3>
                    </div>
                    <button class="btn btn-primary my-3">Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Home;