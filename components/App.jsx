import Child from './Child.js';

//             _____
//            (((|)))
//    //(((((((((( \\\\
//   ())  ~~     ~~  (()
//   (((=(_O_)-(_O_)=)))
//   )O)             (O(     GRANDMA APP
//   (((   \_____/   )))
//      \___________/
//        /|\   /|\               _
//       /(| \ / |)\              ))
//     //( |  @  | )|  (\__/)_____((   method()
//     ||(_|     |_)   (-,-_)      )   method(parm)
//     |||_________|    \ , /---\  /
//     ||   \_|_/        ||\\   ///


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      advice: "Fall down seven times, get up eight",
      joke: 'A bear walks into a sandwhich shop...',
      howOld: 'some age or another'
    };

    //SPACE RESERVED FOR FUNCTION BINDING
    // this.giveAge = this.giveAge.bind(this)

  }

  render() {
    return (
      <div>
        <div>Grandma App -- ((( the source of all knowledge )))
          -- My grandchild just turned {this.state.howOld}!

          <Child
            advice={this.state.advice}
            joke={this.state.joke}
            // giveAge={this.giveAge}
            // openBirthdayCard={this.openBirthdayCard}

          />
        </div>
      </div>
    );
  }

  giveAge(age) {
    this.setState({
      howOld: age
    });
  }

  // openBirthdayCard() {
  //   alert("Happy Birthday!")
  // }

};

export default App;