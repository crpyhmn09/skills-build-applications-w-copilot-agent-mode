import ResourceList from './ResourceList'

export default function Teams() {
  return (
    <ResourceList
      endpoint="teams"
      eyebrow="Your people"
      title="Teams"
      description="Find your crew, track shared progress, and keep the energy moving."
      emptyMessage="Create a team to start training together."
      renderItem={(team) => (
        <article className="resource-card" key={team._id}>
          <div className="team-mark">{team.name.slice(0, 1)}</div>
          <div className="card-main">
            <h2>{team.name}</h2>
            <p>{team.members?.length || 0} members</p>
          </div>
          <strong className="card-value">{team.points} pts</strong>
        </article>
      )}
    />
  )
}
