export default function AnimatedBackGround() {
  //Make sure this component has the lowest z-index, overwise it would block all others
  return (
    <ul className="circles z-0">
      {/*Each <li> is an animated square*/}
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
