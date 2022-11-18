const Curso = (props) => {
    return (
      <div>
      <hr></hr>
      <h2>{props.curso}</h2>
      <div>Profesor: <span>{props.profesor}</span></div>
      <div>Duración: <span>{props.duracion} semanas</span></div> 
      </div> 
    )
  }

  export default Curso;