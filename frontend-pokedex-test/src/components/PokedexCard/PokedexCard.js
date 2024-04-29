import React from 'react';
import PropTypes from 'prop-types';
import ColoredShape from '../../components/ColoredShape/ColoredShape';

const PokedexCard = ({ name, imageUrl }) => {
    return (
        <div className="card" style={{ backgroundColor: "#F21B6A" }}>
            <div className="card-body">
                <div><h5 className="card-title" style={{ color: '#E5F860' }}>{name.charAt(0).toUpperCase() + name.slice(1)}</h5></div>
                <img src={imageUrl} alt={name} className="img-fluid" style={{ width: '40vw', padding: '10px', backgroundColor: "#05DBF2" }} />
                <div className="row row-cols-1 row-cols-md-4 ">
                    <ColoredShape
                        width="50px"
                        height="50px"
                        borderRadius="50%"
                        marginTop="20px"
                        backgroundColor="#451559"
                    />
                    <ColoredShape
                        width="100px"
                        height="30px"
                        borderRadius="10%"
                        marginTop="20px"
                        backgroundColor="#31F54F"
                    />
                    <ColoredShape
                        width="100px"
                        height="30px"
                        borderRadius="10%"
                        marginTop="20px"
                        backgroundColor="#FB8E52"
                    />
                    <ColoredShape
                        width="50px"
                        height="50px"
                        borderRadius="50%"
                        marginTop="20px"
                        backgroundColor="#451559"
                    />
                </div>
            </div>
        </div>
    );
};

PokedexCard.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default PokedexCard;
