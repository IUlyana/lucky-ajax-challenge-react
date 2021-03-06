const React = require('react');

module.exports = function Square({ die, roll }) {
  return (
    <div id="die-container">
      {die
      && (
        <div className="die">
          <span className="roll">
            {roll}
          </span>
        </div>
      )}
    </div>
  );
};
