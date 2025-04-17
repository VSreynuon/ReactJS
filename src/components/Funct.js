function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name}</li>;
  }
  return <li className="item">{name}</li>;
}

function Funct() {
  return (
    <ul>
      <Item name="Toothbrush" isPacked={true} />
      <Item name="Towel" isPacked={true} />
      <Item name="Socks" isPacked={true} />
    </ul>
  );
} 
export default Funct;
