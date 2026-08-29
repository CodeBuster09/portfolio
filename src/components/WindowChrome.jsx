export default function WindowChrome({ title }) {
  return (
    <div className="window-bar">
      <span className="window-dot window-dot--red" />
      <span className="window-dot window-dot--yellow" />
      <span className="window-dot window-dot--green" />
      <span className="window-title">{title}</span>
    </div>
  )
}
