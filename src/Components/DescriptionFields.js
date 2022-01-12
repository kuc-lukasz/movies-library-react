import "../Styles/DescriptioFields.css";
const DescriptionFields = ({ label, value }) => {
  return (
    <div className="descriptioFields">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
};

export default DescriptionFields;
