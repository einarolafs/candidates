const initial = [{
  id: 1,
  name: 'Alvin Satterfield',
  email: 'cornellbartell@connellyleannon.biz',
  birth_date: '1997-09-07',
  year_of_experience: 5,
  position_applied: 'Technician',
  application_date: '2018-07-02',
  status: 'rejected'
},
{
  id: 2,
  name: 'Colette Morar',
  email: 'corinnestark@pacocha.co',
  birth_date: '1998-08-03',
  year_of_experience: 3,
  position_applied: 'Designer',
  application_date: '2017-11-18',
  status: 'waiting'
},
{
  id: 3,
  name: 'Rosalind Rath DDS',
  email: 'sandyankunding@marks.io',
  birth_date: '1980-03-28',
  year_of_experience: 15,
  position_applied: 'Orchestrator',
  application_date: '2018-01-31',
  status: 'approved'
}]

const CANDIDATES = 'CANDIDATES'

const candidates = (state = initial, action) => {
  switch (action.type) {
    case CANDIDATES:
      return state
    default:
      return state
  }
}

export default candidates
export {
  CANDIDATES
}
