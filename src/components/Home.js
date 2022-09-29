import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaFacebookMessenger, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import Swal from 'sweetalert2';
import logo from '../img/favicon.jpg';
import profile from '../img/main_photo-2.jpg';
import Exercise from './Exercise';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [times, setTimes] = useState(0);
    const [breaks, setBreaks] = useState([]);
    const [breakTime, setBreakTime] = useState(0);


    // card data
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    //break time data
    useEffect(() => {
        fetch('breakData.json')
            .then(res => res.json())
            .then(data => setBreaks(data))
    }, [])

    const handleAddToList = (time) => {
        const oldTime = parseInt(time) + parseInt(times);
        setTimes(oldTime)
    }

    // add break time
    const handleAddToBreak = (breakTime) => {

        const prevLsTimeParse = localStorage.getItem('Time');
        const prevLsTime = JSON.parse(prevLsTimeParse);

        if (prevLsTime) {
            localStorage.setItem('Time', JSON.stringify([...prevLsTime, breakTime ]))
        } else {
            localStorage.setItem('Time', JSON.stringify([breakTime]))
        }
        setBreakTime(breakTime)
    }

    //tostHandler
    const tostHandler = () => {
        Swal.fire({
            icon: 'success',
            title: 'Congratulations! Done your activity',
            showConfirmButton: false,
            timer: 1500
        })
    }


    return (
        <div className='home-page'>

            <div className="exercise-area">
                <div className="exercise-container pt-[60px]">
                    <div className=' flex items-center logo md:justify-center'>
                        <img className="w-[50px] h-[45px] mr-3 " src={logo} alt="" srcSet="" />
                        <span className='text-4xl font-bold text-blue-700 drop-shadow'>
                            GYM CLUB
                        </span>
                    </div>
                    <h2 className='text-xl my-5 today font-bold'>Select today's exercise</h2>
                    <div className="exercise-content">
                        {
                            exercises.map(exercise =>
                                <Exercise
                                    key={exercise.id}
                                    exercise={exercise}
                                    handleAddToList={handleAddToList}
                                />
                            )
                        }
                    </div>
                </div>

                <div className="exercise-schedule p-4 py-5 pt-9 shadow-lg">
                    <div className="profile-info flex items-center mb-4">
                        <img className="w-[50px] h-[50px] mr-4" src={profile} alt="" srcSet="" />
                        <div>
                            <h2 className='font-bold text-lg text-blue-700'>Emon Hossain</h2>
                            <p className='text-fuchsia-900 text-sm font-semibold'>Junior Web Developer</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center break-time bg-slate-300 rounded-lg p-3'>
                        <button className="btn btn-circle btn-outline">
                            <a href="#"><FaFacebookF /></a>
                        </button>
                        <button className="btn btn-circle btn-outline">
                            <a href="#"><FaFacebookMessenger /></a>

                        </button>
                        <button className="btn btn-circle btn-outline">
                            <a href="#"><FaLinkedin /></a>

                        </button>
                        <button className="btn btn-circle btn-outline">
                            <a href="#"><FaInstagramSquare /></a>

                        </button>
                    </div>
                    <div className='break-content my-5'>
                        <h2 className='text-xl font-bold mb-3'>Add A Break</h2>
                        <div className='flex flex-wrap justify-between items-center break-time bg-slate-300 rounded-lg p-3'>
                            {
                                breaks.map(singleBreak =>
                                    <div key={singleBreak.id} >
                                        <p onClick={() => handleAddToBreak(singleBreak.time)} className="btn  btn-sm btn-circle btn-outline">{singleBreak.time}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="exercise-details">
                        <h2 className='text-xl font-bold mb-3'>Exercise Details</h2>
                        <div className='flex justify-between items-center mb-4 bg-slate-300 rounded-lg p-3'>
                            <h3 className='text-lg font-semibold'>Exercise time</h3>
                            <p>{times} seconds</p>
                        </div>
                        <div className='flex justify-between items-center mb-4 bg-slate-300 rounded-lg p-3'>
                            <h3 className='text-lg font-semibold'>Break time</h3>
                            <p>{breakTime} seconds</p>
                        </div>
                    </div>
                    <div className='text-center mt-6'>
                        <button onClick={tostHandler} className="btn w-full btn-primary  my-3">Activity Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;