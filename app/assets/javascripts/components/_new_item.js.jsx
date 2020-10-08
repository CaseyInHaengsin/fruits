const NewFruit = (props) => {
    let formFields = {}
   
    return(
      <form className="ui form" onSubmit={(e) => {
        e.preventDefault();
        props.handleFormSubmit(
          formFields.name.value,
          formFields.description.value
        )

        e.target.reset();
      }}>
       <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
       <input ref={input => formFields.description = input} placeholder='Enter a description' />
       <button className="ui button">Submit</button>
      </form>
    )
  }