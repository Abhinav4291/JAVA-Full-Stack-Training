const EMPLOYEES = {
  E101: { id: 'E101', name: 'Abhinav', department: 'Finance', salary: 850000 },
  E102: { id: 'E102', name: 'Ayush Kumar', department: 'Engineering', salary: 1250000 },
  E103: { id: 'E103', name: 'Priyanshu Sharma', department: 'Human Resources', salary: 680000 },
  E104: { id: 'E104', name: 'Rakshit Pandey', department: 'Operations', salary: 540000 }
};

export function getEmployeeDetails(id) {
  return EMPLOYEES[id?.toUpperCase()];
}

export function getAllEmployeeIds() {
  return Object.keys(EMPLOYEES);
}
