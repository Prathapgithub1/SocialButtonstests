const Button = (props) => {
  //  Write your code here.
  const { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="image">
    <div className="containerOne">
      <h1 className="mainHeading">Special Buttons</h1>
      <div>
        <Button buttonText="like" className="Like-button" />
        <Button buttonText="Comment" className="Comment-button" />
        <Button buttonText="Share" className="Share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(<Button name1="Like" name2="Comment" name3="Share" />);
