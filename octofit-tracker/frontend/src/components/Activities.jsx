import ResourceList from './ResourceList'

export default function Activities() {
  return (
    <ResourceList
      endpoint="activities"
      eyebrow="Movement log"
      title="Recent activities"
      description="Small, consistent efforts add up. Keep an eye on the work your team is putting in."
      emptyMessage="No activities logged yet."
      renderItem={(activity) => (
        <article className="resource-card" key={activity._id}>
          <div className="card-icon">{activity.type === 'running' ? 'RUN' : activity.type === 'walking' ? 'WALK' : 'LIFT'}</div>
          <div className="card-main">
            <h2>{activity.type}</h2>
            <p>{activity.durationMinutes} minutes{activity.distanceKm ? ` · ${activity.distanceKm} km` : ''}</p>
          </div>
          <strong className="card-value">+{activity.points}</strong>
        </article>
      )}
    />
  )
}
