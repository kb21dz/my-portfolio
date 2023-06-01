
function Navbar() {
  return (
    <div className="navbar">
      <div className="picturename">
        <img src="./src/assets/tete.jpg" alt="profile-picture"/>
        <p>Kader Benderdouche</p>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li className="contactli">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
