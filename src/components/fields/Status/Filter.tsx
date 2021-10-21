import { IFilterOperator } from "../types";

export const filterOperators: IFilterOperator[] = [
  {
    label: "equals",
    value: "==",
  },
  {
    label: "not equals",
    value: "!=",
  },
];

const CustomFilter = (config: any) => {
  return <>custom</>;
};
export default CustomFilter;
