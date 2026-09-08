import ResourceList from './ResourceList'

export default function Leaderboard() {
  return (
    <ResourceList
      endpoint="leaderboard"
      eyebrow="Friendly competition"
      title="Leaderboard"
      description="Celebrate the people making momentum visible this week."
      emptyMessage="The leaderboard is waiting for its first entries."
      renderItem={(entry) => (
        <article className={`resource-card rank-card rank-${entry.rank}`} key={entry._id}>
          <span className="rank-number">{String(entry.rank).padStart(2, '0')}</span>
          <div className="card-main">
            <h2>{entry.user}</h2>
            <p>Team score contributor</p>
          </div>
          <strong className="card-value">{entry.points} pts</strong>
        </article>
      )}
    />
  )
}
