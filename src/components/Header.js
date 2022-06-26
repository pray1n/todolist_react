function Header() {
  const today = new Date();
  return (
    <div className="header">
      <a href="#"><img src="header.png" /></a>
      <h3>Todo-List</h3>
      <span>{today.toLocaleDateString()}</span>
    </div>
  );
}
  
export default Header;