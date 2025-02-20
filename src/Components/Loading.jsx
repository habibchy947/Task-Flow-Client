import React from 'react';
import { ImSpinner } from 'react-icons/im';

const Loading = () => {
    return (
        <div>
            <ImSpinner className='animate-spin'></ImSpinner>
        </div>
    );
};

export default Loading;