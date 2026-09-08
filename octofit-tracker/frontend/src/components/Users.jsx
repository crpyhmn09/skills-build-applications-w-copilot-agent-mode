import ResourceList from './ResourceList'

export default function Users() {
  return (
    <ResourceList
      endpoint="users"
      eyebrow="Community"
      title="Athletes"
      description="Meet the students turning everyday movement into a shared habit."
      emptyMessage="No athletes have joined yet."
      renderItem={(user) => (
        <article className="resource-card" key={user._id}>
          <div className="avatar">{user.displayName?.slice(0, 1)}</div>
          <div className="card-main">
            <h2>{user.displayName}</h2>
            <p>@{user.username} · {user.fitnessLevel}</p>
          </div>
          <span className="status-dot" title="Active profile" />
        </article>
      )}
    />
  )
}
