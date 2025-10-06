import React from 'react';

export const BarcodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
    <path d="M4 17v1a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v1" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
    <path d="M5 11h1v2h-1z" />
    <path d="M10 11l0 2" />
    <path d="M14 11h1v2h-1z" />
    <path d="M19 11l0 2" />
  </svg>
);

export const HistoryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8l0 4l2 2" />
    <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
  </svg>
);

export const ScienceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 3l6 0" />
    <path d="M10 9l4 0" />
    <path d="M10 3v5c0 .6 .4 1 1 1h2c.6 0 1 -.4 1 -1v-5" />
    <path d="M8 9h8a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
  </svg>
);

export const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
        <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </svg>
);

export const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="15" y1="8" x2="15.01" y2="8" />
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
        <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
    </svg>
);

export const BackIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 6l-6 6l6 6" />
  </svg>
);