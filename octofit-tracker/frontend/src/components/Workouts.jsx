import ResourceList from './ResourceList'

export default function Workouts() {
  return (
    <ResourceList
      endpoint="workouts"
      eyebrow="Personalized picks"
      title="Workouts"
      description="Choose a session that fits your energy and keep your streak alive."
      emptyMessage="No workouts are available right now."
      renderItem={(workout) => (
        <article className="resource-card workout-card" key={workout._id}>
          <div className="workout-label">{workout.type}</div>
          <div className="card-main">
            <h2>{workout.name}</h2>
            <p>{workout.durationMinutes} min · {workout.difficulty}</p>
            <small>{workout.description}</small>
          </div>
          <span className="arrow-mark" aria-hidden="true">-&gt;</span>
        </article>
      )}
    />
  )
}
