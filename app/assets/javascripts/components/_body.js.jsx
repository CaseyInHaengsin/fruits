class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fruits: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }

      handleFormSubmit(name, description){
        
        let body = JSON.stringify({fruit: {name: name, description:   description} })
        fetch('api/v1/fruits', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
        }).then((res) => {return res.json()})
          .then((fruit) => {
            this.addNewFruit(fruit);
          })
        console.log(name, description)
      }

      addNewFruit(fruit){
        this.setState({
          fruits: this.state.fruits.concat(fruit)
        })
      }

    componentDidMount(){
        fetch('/api/v1/fruits')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ fruits: data }) });
      }
    render(){
        return(
          <div>
            <NewFruit handleFormSubmit={this.handleFormSubmit}/>
            <AllFruits fruits={this.state.fruits} />
          </div>
        )
      }
    }