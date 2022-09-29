import React from 'react';

const Exercise = ({ exercise, handleAddToList }) => {
    const { picture, age, name, time, about } = exercise;
    // const newExercise = [exercise];
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure className='rounded-md'><img className='p-[1rem] pb-0 h-[210px] w-full rounded-md' src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{about.slice(0, 190)}</p>
                <p className='font-semibold'>For Age: {age}</p>
                <p className='font-semibold'>Time required: {time}s </p>

                <button onClick={() => handleAddToList(time)} class="btn btn-primary my-3">Add to list</button>
            </div>
        </div>
    );
};

export default Exercise;