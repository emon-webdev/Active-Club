import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-9/12 mx-auto py-[120px] m'>
            <h2 className='text-center text-5xl mb-9 pb-6 font-bold'>Question</h2>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How does react work?
                </div>
                <div class="collapse-content">
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible</p>
                </div>
            </div>

            <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What is the difference between state and props in React?
                </div>
                <div class="collapse-content">
                    <h3 className="font-bold text-md">Props</h3>
                    <p> The Data is passed from one component to another.</p>
                    <p>It is Immutable (cannot be modified).</p>
                    <p>Props can be used with state and functional components.</p>
                    <h3 className="font-bold text-md">State</h3>
                    <p>The Data is passed within the component only. </p>
                    <p>It is Mutable ( can be modified).
                    </p>
                    <p>State can be used only with the state components </p>
                </div>
            </div>
            <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                useEffect use cases
                </div>
                <div class="collapse-content">
                    <p> validating input field.</p>
                    <p>fetch API data </p>
                    <p>live filtering </p>
                    <p>trigger animation on new array value </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;