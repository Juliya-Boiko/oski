import { Field } from "formik";

export const RadioGroup = ({ name, data }) => { 
  return (
    <div>
      {data.map((el) => {
        return (
          <label key={el}>
            <Field type="radio" name={name} value={el} />
            {el}
          </label>
        )
      })}
    </div>
  );
};