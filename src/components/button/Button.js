import React from 'react';

const Button = ({ onClick, className, children, type = 'button' }) => {
    return (
        <button type={type} className={`${className}`} onClick={onClick}>{children}</button>
    );
};

export default Button;