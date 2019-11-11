var Grandchild = ({advice, joke, giveAge, openBirthdayCard}) => (

  <div>Grandchild
    {/* -- My parent told me a joke: "{joke}" */}

    <div>
      "I just turned..."
      <input
        className="form-control"
        type="text"
        onChange={(event) => YOUR_EXPRESSION_HERE}
      />
    </div>

    {/* <div>
      <button onClick={openBirthdayCard} >Open Birthday Card</button>
    </div> */}

  </div>

);

export default Grandchild;