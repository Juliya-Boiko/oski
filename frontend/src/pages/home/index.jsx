import { useAssigned } from "../../services/quiz/useAssigned";

const HomePage = () => {
  const { data } = useAssigned();

  console.log(data);
  
  return (
    <div>home page</div>
  );
};

export default HomePage;