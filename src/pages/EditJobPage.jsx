import { useParams } from "react-router-dom";

const EditJobPage = () => {
  const params = useParams();
  return <div className="text-[100px] w-full text-center">{params.id}</div>;
};

export default EditJobPage;
