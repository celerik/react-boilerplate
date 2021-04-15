// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Logo = ({ classes, id }) => (
    <div className={classes.logo} id={id}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <circle cx="32" cy="31" r="28" fill="#FEFEFE" />
            </g>
            <path d="M21.4708 40C20.6585 40 20 39.3198 20 38.4808V31.5522H23.1344V35.5665C25.5401 34.2284 27.9458 32.8903 30.3515 31.5522H35.9651V35.5665C38.3708 34.2284 40.7765 32.8903 43.1822 31.5522H49C48.9268 31.7459 48.8155 31.9241 48.6703 32.074C48.5691 32.1786 48.4545 32.2662 48.3307 32.3354C43.888 34.8289 39.4453 37.3229 35.0026 39.8164C34.7893 39.9359 34.5486 40 34.3015 40C33.4892 40 32.8307 39.3198 32.8307 38.4808V33.8341C29.2777 35.8282 25.7248 37.8223 22.1718 39.8164C21.9585 39.9359 21.7179 40 21.4708 40ZM20 30.4474V23.5192C20 22.6802 20.6585 22 21.4708 22C21.7246 22 21.9634 22.0664 22.1718 22.1833C25.7248 24.1774 29.2777 26.1714 32.8307 28.1655V23.5192C32.8307 22.6802 33.4892 22 34.3015 22C34.5553 22 34.7941 22.0664 35.0025 22.1833C39.4447 24.6764 43.8868 27.1695 48.3289 29.6627C48.3295 29.663 48.3301 29.6634 48.3308 29.6637C48.6345 29.834 48.873 30.1118 49 30.4474H43.1862C40.7792 29.1032 38.3721 27.7589 35.9651 26.4147V30.4474H30.3555C27.9485 29.1032 25.5414 27.7589 23.1344 26.4147V30.4474H20Z" fill="#FF0060" />
            <defs>
                <filter id="filter0_d" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    </div>
);

Logo.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

Logo.defaultProps = {};

export default withStyles(styles)(Logo);
