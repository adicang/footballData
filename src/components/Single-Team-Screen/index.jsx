import React, { useEffect, useState } from 'react';

import Loader from '../Loader';
import './index.scss';
import EmptyTeamLogoSrc from '../../assets/football.png';
import shirtSrc from '../../assets/shirt.png';

import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faGlobe,
  faCalendarAlt,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const SingleTeam = props => {
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // Get team id from url and data from https://api.football-data.org
  const fetchData = async () => {
    setLoading(true);

    let url_string = window.location.href;
    let url = new URL(url_string);
    let teamId = url.searchParams.get('id');

    await fetch(`https://api.football-data.org/v2/teams/${teamId}`, {
      headers: {
        'X-Auth-Token': '3b697eaf3f134a8b84675732570a9beb'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setTeam(data);
        }
        setLoading(false);
      })
      .catch(err => setLoading(false));
  };

  return (
    <div className='page-container-single-team'>
      <div className='go-back' onClick={() => props.history.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to teams list
      </div>

      {loading && <Loader />}

      {team && (
        <Fade top>
          <div className='team-container'>
            <div className='header'>
              <img
                src={team.crestUrl ? team.crestUrl : EmptyTeamLogoSrc}
                className='team-logo'
              />
              <h1>{team.name}</h1>
            </div>

            <div className='inner-team-container'>
              <div className='details-container'>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Founded: <span>{team.founded}</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faGlobe} />
                  Website:{' '}
                  <a href={team.website} target='_blank'>
                    {team.website}
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  Address: {team.address}
                </p>
              </div>

              <div className='players-container'>
                <h3>Squad:</h3>
                <DataTable
                  className='squad-table'
                  columns={columns}
                  data={team.squad}
                  defaultSortField='shirtNumber'
                  striped
                  noHeader={true}
                  customStyles={customStyles}
                  keyField={team.squad.id}
                  progressComponent={<Loader />}
                />
              </div>
            </div>
          </div>
        </Fade>
      )}

      {!loading && !team && (
        <div className='no-results'>
          <h1>Someting Went Wrong</h1>
          <p>We could not fetch results</p>

          <button onClick={() => fetchData()}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default SingleTeam;

// Table Styles
const customStyles = {
  rows: {
    style: {
      minHeight: '55px'
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      fontWeight: 'bold',
      textAlign: 'right',
      margin: '0 auto',
      fontSize: '15px'
    }
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      fontSize: '15px'
    }
  }
};

// Table columns
const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true
  },
  {
    name: '',
    sortable: false,
    cell: row => {
      return (
        <div className='player-shirt'>
          <img src={shirtSrc} />
          <span style={row.shirtNumber < 10 ? { left: '40%' } : {}}>
            {row.shirtNumber}
          </span>
        </div>
      );
    }
  }
];
