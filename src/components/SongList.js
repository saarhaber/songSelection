import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
renderList() {
    return this.props.songs.map((song) => {
        return (
            <div className="item" key={song.title}>
            <div className= "right floated content"> 
            <button
                className="ui button primary"
                onClick={()=> this.props.selectSong(song)}
            >
                Select
            </button>
            </div>
            <div className="content"> {song.title}</div>
            </div>
        );
    });
}

  render (){
        return <div className="ui divided list">{this.renderList()}</div>;
    }
  }


//taking all the data in the store and show it in props in the component. can be called anything but Map is convention. that 'state' that is passed is all the data in the redux store.
const mapStateToProps = state => {
    console.log(state);
return { songs: state.songs};
}


export default connect(mapStateToProps, {selectSong})(SongList);