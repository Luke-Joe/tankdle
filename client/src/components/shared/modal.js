import React from 'react';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50 ease-in-out animate-fade-in" onClick={handleBackgroundClick}>
            <div className="bg-wblack rounded shadow-lg p-4 relative mx-auto border-4 border-double border-wgray max-w-3xl max-h-[80vh] overflow-auto">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-red-400 hover:text-red-500 focus:outline-none text-2xl"
                >
                    &times;
                </button>
                <div className="h-full overflow-auto ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;