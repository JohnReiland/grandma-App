var LyingBrat = ({}) => (

  <div>Lying Brat

    <div>
      "Your grandchild just turned..."
      <input
        className="form-control"
        type="text"
        onChange={(event) => App.state.howOld = event.target.value}
      />
    </div>

  </div>






);

export default LyingBrat;