import React from 'react'

function NvTrailer() {
    return (
        <div>
            <iframe title="trailer" width="1080" height="720" src=""> </iframe>
            <div className="trailer-actions">
                <div className="trailer-button">
                    <button type="submit">Next Trailer</button>
                </div>
                <div className="trailer-button">
                    <button type="submit">Previous Trailer</button>
                </div>
                <div className="trailer-button close">
                    <button type="submit">Close</button>
                </div>
            </div>
        </div>
    )
}

export default NvTrailer
