import React from 'react';

const Wish = ({name}) => {
    return (
        <div className="countdown-header" style={{fontSize:'50px'}}>
            HAPPY BIRTHDAY <span>{name.toUpperCase()}</span> !!
        </div>
    );
};

export default Wish;