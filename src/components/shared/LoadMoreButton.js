const LoadMoreButton = ({action}) => {
  return (
    <div class="load-more-main text-center">
      <button onClick={action} type="button" class="animate-btn animate-btn-outline">Load more</button>
    </div>
  )
}

export default LoadMoreButton