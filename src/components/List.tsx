import { ReactNode } from "react";
import { render } from "react-dom";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T extends {}>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
