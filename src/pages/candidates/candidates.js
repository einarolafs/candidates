import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Table } from '../../components'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'birth_date', label: 'Birth date' },
  { key: 'year_of_experience', label: 'Years of Experience', sort: true },
  { key: 'position_applied', label: 'Position Applied', sort: true },
  { key: 'application_date', label: 'Application date', sort: true },
  { key: 'status', label: 'Status' }
]

const Candidates = ({ candidates, setCandidates, filter, sort }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('http://personio-fe-test.herokuapp.com/api/v1/candidates')

        if (response.ok) {
          const { data, error } = await response.json()

          if (error) {
            if (error.code === 500) {
              return console.log('have to try again')
            }

            throw Error(error.message)
          }

          setCandidates(data)
        }
      }
      catch (error) {
        console.error('Error found')
      }
    }

    fetchData()
  }, [])

  return (
    <div className="wrapper">
      <Table columns={columns} filter={filter} sort={sort} content={candidates}/>
    </div>
  )
}

Candidates.propTypes = {
  candidates: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      id: PropTypes.number,
    })
  ),
  filter: PropTypes.func,
  setCandidates: PropTypes.func,
  sort: PropTypes.func
}

export default Candidates
