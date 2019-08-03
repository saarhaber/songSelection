import React from 'react';
import { connect } from 'react-redux';

//don't have to make class component

const SongDetail = ({song}) => {
    if (!song) {
        return <div>Select a song</div>
    }
    return (
    <div>
        <h3>Details for:</h3>
        <p>Title: {song.title} </p>
        <br/>
         Duration: {song.duration}
    </div>
    );
};

const mapStatetoProp = (state) => {
    return {
        song: state.selectedSong
    }
};

export default connect(mapStatetoProp)(SongDetail);