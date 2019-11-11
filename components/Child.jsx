import Grandchild from './Grandchild.js';
import LyingBrat from './LyingBrat.js'

var Child = ({advice, joke, giveAge, openBirthdayCard}) => (
  <div>Child
    {/* -- As my parent always says, "{advice}" */}
    <Grandchild
      advice={advice}
      joke={joke}
      // giveAge={giveAge}
      // openBirthdayCard={openBirthdayCard}
    />
  </div>
);

export default Child;