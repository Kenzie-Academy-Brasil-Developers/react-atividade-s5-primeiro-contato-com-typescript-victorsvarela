import "./style.css";

interface CardProps {
  name: string;
  hobby: string;
  age: number;
}

const Card = ({ name, hobby, age }: CardProps) => {
  return (
    <div className="container__Card">
      <div className="card">
        <h2>Nome: {name.substring(0, 6)}...</h2>
        <h5>Hobby: {hobby}</h5>
        <h5>Idade: {age}</h5>
      </div>
    </div>
  );
};

export default Card;
