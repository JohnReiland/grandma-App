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
    super(props);

    this.state = {
      advice: "Fall down seven times, get up eight",
      joke: 'A bear walks into a sandwhich shop...',
      howOld: 'some age or another'
    };

    //SPACE RESERVED FOR FUNCTION BINDING
    // this.giveAge = this.giveAge.bind(this)
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        'Grandma App -- ((( the source of all knowledge ))) -- My grandchild just turned ',
        this.state.howOld,
        '!',
        React.createElement(Child, {
          advice: this.state.advice,
          joke: this.state.joke
          // giveAge={this.giveAge}
          // openBirthdayCard={this.openBirthdayCard}

        })
      )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJDaGlsZCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiYWR2aWNlIiwiam9rZSIsImhvd09sZCIsInJlbmRlciIsImdpdmVBZ2UiLCJhZ2UiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixZQUFsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQzs7QUFFaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxxQ0FERztBQUVYQyxZQUFNLHVDQUZLO0FBR1hDLGNBQVE7QUFIRyxLQUFiOztBQU1BO0FBQ0E7QUFFRDs7QUFFREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDZ0MsYUFBS0osS0FBTCxDQUFXRyxNQUQzQztBQUFBO0FBR0UsNEJBQUMsS0FBRDtBQUNFLGtCQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFEckI7QUFFRSxnQkFBTSxLQUFLRCxLQUFMLENBQVdFO0FBQ2pCO0FBQ0E7O0FBSkY7QUFIRjtBQURGLEtBREY7QUFlRDs7QUFFREcsVUFBUUMsR0FBUixFQUFhO0FBQ1gsU0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGNBQVFHO0FBREksS0FBZDtBQUdEOztBQUVEO0FBQ0E7QUFDQTs7QUExQ2dDLENBNENqQzs7QUFFRCxlQUFlWCxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGlsZCBmcm9tICcuL0NoaWxkLmpzJztcblxuLy8gICAgICAgICAgICAgX19fX19cbi8vICAgICAgICAgICAgKCgofCkpKVxuLy8gICAgLy8oKCgoKCgoKCgoIFxcXFxcXFxcXG4vLyAgICgpKSAgfn4gICAgIH5+ICAoKClcbi8vICAgKCgoPShfT18pLShfT18pPSkpKVxuLy8gICApTykgICAgICAgICAgICAgKE8oICAgICBHUkFORE1BIEFQUFxuLy8gICAoKCggICBcXF9fX19fLyAgICkpKVxuLy8gICAgICBcXF9fX19fX19fX19fL1xuLy8gICAgICAgIC98XFwgICAvfFxcICAgICAgICAgICAgICAgX1xuLy8gICAgICAgLyh8IFxcIC8gfClcXCAgICAgICAgICAgICAgKSlcbi8vICAgICAvLyggfCAgQCAgfCApfCAgKFxcX18vKV9fX19fKCggICBtZXRob2QoKVxuLy8gICAgIHx8KF98ICAgICB8XykgICAoLSwtXykgICAgICApICAgbWV0aG9kKHBhcm0pXG4vLyAgICAgfHx8X19fX19fX19ffCAgICBcXCAsIC8tLS1cXCAgL1xuLy8gICAgIHx8ICAgXFxffF8vICAgICAgICB8fFxcXFwgICAvLy9cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWR2aWNlOiBcIkZhbGwgZG93biBzZXZlbiB0aW1lcywgZ2V0IHVwIGVpZ2h0XCIsXG4gICAgICBqb2tlOiAnQSBiZWFyIHdhbGtzIGludG8gYSBzYW5kd2hpY2ggc2hvcC4uLicsXG4gICAgICBob3dPbGQ6ICdzb21lIGFnZSBvciBhbm90aGVyJ1xuICAgIH07XG5cbiAgICAvL1NQQUNFIFJFU0VSVkVEIEZPUiBGVU5DVElPTiBCSU5ESU5HXG4gICAgLy8gdGhpcy5naXZlQWdlID0gdGhpcy5naXZlQWdlLmJpbmQodGhpcylcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PkdyYW5kbWEgQXBwIC0tICgoKCB0aGUgc291cmNlIG9mIGFsbCBrbm93bGVkZ2UgKSkpXG4gICAgICAgICAgLS0gTXkgZ3JhbmRjaGlsZCBqdXN0IHR1cm5lZCB7dGhpcy5zdGF0ZS5ob3dPbGR9IVxuXG4gICAgICAgICAgPENoaWxkXG4gICAgICAgICAgICBhZHZpY2U9e3RoaXMuc3RhdGUuYWR2aWNlfVxuICAgICAgICAgICAgam9rZT17dGhpcy5zdGF0ZS5qb2tlfVxuICAgICAgICAgICAgLy8gZ2l2ZUFnZT17dGhpcy5naXZlQWdlfVxuICAgICAgICAgICAgLy8gb3BlbkJpcnRoZGF5Q2FyZD17dGhpcy5vcGVuQmlydGhkYXlDYXJkfVxuXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZ2l2ZUFnZShhZ2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhvd09sZDogYWdlXG4gICAgfSk7XG4gIH1cblxuICAvLyBvcGVuQmlydGhkYXlDYXJkKCkge1xuICAvLyAgIGFsZXJ0KFwiSGFwcHkgQmlydGhkYXkhXCIpXG4gIC8vIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==