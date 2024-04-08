import React, { useState } from 'react';
import './WhatsNew.css'; // Import your CSS file for styling

const WhatsNew = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = index => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const getImageSize = index => {
        if (hoveredIndex === index) return 'large';
        if (hoveredIndex === index - 1 || (hoveredIndex === 0 && index === 2)) return 'medium';
        return 'small';
    };

    return (
        <div className="image-gallery">
            <img
                src="../../assets/images/whats_new/first_iamge.png"
                alt="First Image"
                className={getImageSize(0)}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
            />
            <img
                src="path_to_second_image"
                alt="Second Image"
                className={getImageSize(1)}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
            />
            <img
                src="path_to_third_image"
                alt="Third Image"
                className={getImageSize(2)}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    );
};

export default WhatsNew;
