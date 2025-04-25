const Total = props => {


    return (
      <div>
          <b><p>
              Number of exercises {props.parts[0].exercises + props.parts[1].exercises}
          </p></b>
      </div>
    )
  }
export default Total