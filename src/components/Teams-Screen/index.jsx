import React, { useEffect, useState } from 'react';

import Loader from '../Loader';
import './index.scss';
import EmptyTeamLogoSrc from '../../assets/football.png';

import DataTable from 'react-data-table-component';
import Fade from 'react-reveal/Fade';

const Teams = props => {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState('');
  const [allTeamsFiltered, setAllTeamsFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Get teams data from https://api.football-data.org
  const fetchData = async () => {
    setLoading(true);

    await fetch('https://api.football-data.org/v2/competitions/2001/teams', {
      headers: {
        'X-Auth-Token': '3b697eaf3f134a8b84675732570a9beb'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.teams) {
          setTeams(data.teams);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (search !== '' || search !== null) {
      const filteredData = teams.filter(
        item =>
          item.name && item.name.toLowerCase().includes(search.toLowerCase())
      );

      setAllTeamsFiltered(filteredData);
    } else {
      setAllTeamsFiltered(null);
    }
  }, [search]);

  const handleRowClick = row => {
    props.history.push(`${process.env.PUBLIC_URL}/team?id=${row.id}`);
  };

  return (
    <div className='page-container'>
      {loading && <Loader />}

      {teams.length > 0 && (
        <div className='table-container'>
          <Fade bottom>
            <div className='header-row'>
              <h1>Football Teams</h1>
              <input
                type='text'
                placeholder='Search by team name'
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <DataTable
              className='table'
              columns={columns}
              data={search ? allTeamsFiltered : teams}
              defaultSortField='founded'
              striped
              noHeader={true}
              customStyles={customStyles}
              keyField={teams.id}
              progressComponent={<Loader />}
              onRowClicked={row => handleRowClick(row)}
            />
          </Fade>
        </div>
      )}

      {!loading && teams.length === 0 && (
        <div className='no-results'>
          <h1>Someting Went Wrong</h1>
          <p>We could not fetch results</p>

          <button onClick={() => fetchData()}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default Teams;

// Table columns
const columns = [
  {
    name: '',
    selector: 'crestUrl',
    sortable: false,
    cell: row => (
      <img
        src={row.crestUrl ? row.crestUrl : EmptyTeamLogoSrc}
        className='team-logo'
      />
    )
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true
  },
  {
    name: 'Founded',
    selector: 'founded',
    sortable: true
  },
  {
    name: 'Address',
    selector: 'address',
    sortable: true
  }
];

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
