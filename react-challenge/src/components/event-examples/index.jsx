import React from 'react';

export const EventExamples = () => {
    const handleFormInput = () => {
        console.log('handleFormInput');
    };

    const handleButtonClick = () => {
        alert('handleButtonClick');
    }

    return (
        <section>
            <form>
                <h2>Typical form</h2>
                <input name='example'
                onChange={handleFormInput}
                style={{ margin: ' 1rem 0' }}
                />
            </form>
            <button onClick={handleButtonClick}>click me</button>
        </section>

    )
}