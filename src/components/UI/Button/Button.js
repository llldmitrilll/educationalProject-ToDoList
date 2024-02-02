const Button = (props) => {
   // const clickButton = (event) => {
   //    event.preventDefault();
   //    props.onChange();
   // }
   return (
      <div>
         <button>{props.children}</button>
      </div>
   )
}

export default Button;