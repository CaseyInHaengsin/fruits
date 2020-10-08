const AllFruits = (props) => {
    var fruits = props.fruits.map((fruit) => {
        return(
          <div className="container">
          <div className="ui relaxed divided list" key={fruit.id}>
            <h1 className="item">{fruit.name}</h1>
            <p className="item">{fruit.description}</p>
          </div>
          </div>
        )
      })
    return(
          <div>
            {fruits}
          </div>
        )
    }