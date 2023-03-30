import React from 'react'

const Pagination = ({ prev, next, onPrivious, onNext }) => {
    const handlePrevious = () => {
        onPrivious();
    };

    const handleNext = () => {
        onNext();
    };

    return (
        <div>
            <nav className='my-5'>
                <ul className="pagination  justify-content-center">
                    {prev ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handlePrevious}>
                                Previous
                            </button>
                        </li>
                    ) : null}
                    {next ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handleNext}>
                                Next
                            </button>
                        </li>
                    ) : null} 
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
