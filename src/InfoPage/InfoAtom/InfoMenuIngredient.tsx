type InfoMenuIngredientProps = {
  content: string[];
};
const InfoMenuIngredient = ({ content }: InfoMenuIngredientProps) => {
  return (
    <div>
      {content.map((ingredient, index) => (
        <span key={index}>{ingredient}</span>
      ))}
      ;
    </div>
  );
};

export default InfoMenuIngredient;
