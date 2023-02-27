const SectionTitle = ({subtitle, title, description}) => {
  return (
    <div class="title">
      <span>{subtitle}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionTitle;