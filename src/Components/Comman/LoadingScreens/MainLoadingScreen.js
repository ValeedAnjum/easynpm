import React from 'react'

const MainLoadingScreen = () => {
    return (
        <React.Fragment>
            <div className='MainLoadingScreen'>
                <div className='loader'>
                  <div className='loader--dot'></div>
                  <div className='loader--dot'></div>
                  <div className='loader--dot'></div>
                  <div className='loader--dot'></div>
                  <div className='loader--dot'></div>
                  <div className='loader--dot'></div>
                  <div className='loader--text'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainLoadingScreen;
