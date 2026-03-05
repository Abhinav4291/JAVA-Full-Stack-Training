import { useParams } from 'react-router-dom';

const detailsMap = {
  hr: {
    title: 'Human Resources',
    summary: 'Leads talent acquisition, employee engagement, and policy management.',
    metrics: ['Open Roles: 11', 'Trainings This Month: 6', 'Satisfaction Score: 92%']
  },
  finance: {
    title: 'Finance',
    summary: 'Owns budgeting, forecasting, audits, and compliance reporting.',
    metrics: ['Quarterly Budget: $2.4M', 'Cost Efficiency: +8%', 'Forecast Accuracy: 95%']
  },
  engineering: {
    title: 'Engineering',
    summary: 'Builds and maintains internal and customer-facing software systems.',
    metrics: ['Sprint Velocity: 42 points', 'Open Bugs: 18', 'Deployment Frequency: Daily']
  },
  design: {
    title: 'Design',
    summary: 'Drives user experience, interface systems, and product visual direction.',
    metrics: ['Design Reviews: 9/week', 'Prototype Turnaround: 2 days', 'Usability Score: 4.6/5']
  }
};

function DepartmentDetails() {
  const { deptId } = useParams();
  const data = detailsMap[deptId];

  if (!data) {
    return (
      <p>
        Select a valid department route like <code>/departments/hr</code>, <code>/departments/finance</code>,{' '}
        <code>/departments/engineering</code>, or <code>/departments/design</code>.
      </p>
    );
  }

  return (
    <article className="dept-card">
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
      <ul>
        {data.metrics.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default DepartmentDetails;
