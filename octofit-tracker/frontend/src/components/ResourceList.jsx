import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

export default function ResourceList({ endpoint, title, eyebrow, description, renderItem, emptyMessage }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(endpoint)
      .then((items) => {
        if (active) {
          setRecords(items)
          setStatus('ready')
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => {
      active = false
    }
  }, [endpoint])

  return (
    <section className="view-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="section-description">{description}</p>
        </div>
        <span className="record-count">{status === 'ready' ? `${records.length} records` : 'Syncing'}</span>
      </div>

      {status === 'loading' && <div className="state-panel">Loading your {endpoint}...</div>}
      {status === 'error' && <div className="state-panel state-error">{error}</div>}
      {status === 'ready' && records.length === 0 && <div className="state-panel">{emptyMessage}</div>}
      {status === 'ready' && records.length > 0 && <div className="resource-grid">{records.map(renderItem)}</div>}
    </section>
  )
}
