import Part from "./Part.jsx"
const Content = props => {

const { parts } = props
    return (
      <div>
        {props.parts.map((part) => (
          <Part key={part.name} {...part} />
        ))}
      </div>
    )
  }
export default Content