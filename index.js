const Box = props => {
  //  Write your code here.
  const {className, text} = props
  const containerClassName = `boxes-container ${className}`
  return (
    <div className={containerClassName}>
      <p className='text'></p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='heading'>Boxes</h1>
    <div className='card-container'>
      <Boxes className='small-box' text='Small' />
      <Boxes className='medium-box' text='Medium' />
      <Boxes className='large-box' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
