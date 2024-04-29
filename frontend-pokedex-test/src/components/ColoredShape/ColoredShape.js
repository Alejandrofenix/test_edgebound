import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColoredShape = ({ width, height, borderRadius, marginTop, backgroundColor }) => {
    return (
        <div className="col d-flex justify-content-center align-items-center">
            <div style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                marginTop: marginTop,
                backgroundColor: backgroundColor,
            }}></div>
        </div>
    );
};

export default ColoredShape;
