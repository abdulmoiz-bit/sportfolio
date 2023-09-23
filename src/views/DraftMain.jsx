import React from 'react'
import DraftHeader from '../components/Header/DraftHeader';
import DraftHome from '../components/DraftHome/DraftHome';
import Exploreassets from '../components/DraftExploreAssets/Exploreassets';
import PlayersDetails from '../components/DraftPlayersDetails/PlayersDetails';
import Footer from '../components/Footer/Footer';

const DraftMain = () => {
  return (
    <div>
        <DraftHeader/>
        <DraftHome/>
        <Exploreassets/>
        <PlayersDetails/>
        <Footer/>
    </div>
  )
}

export default DraftMain