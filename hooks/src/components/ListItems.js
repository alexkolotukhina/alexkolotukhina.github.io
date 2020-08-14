import React, { useState, useMemo } from "react";
import Item from "./Item";
import Filter from "./Filter";

const ListItems = ({ title, items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const getBody = useMemo(() => {
    let out = [...items];

    if (searchTerm) {
      out = out.filter((item) =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    let todo = out.map((item) => (
      <Item title={title} item={item} key={item.id} />
    ));

    return todo;
  }, [items, searchTerm, title]);

  return (
    <section>
      <h3 className="mb-3">{title}</h3>
      <Filter filter={searchTerm} onChange={updateFilter} />

      <ul className="mb-3 p-0">{getBody}</ul>
    </section>
  );
};

export default React.memo(ListItems);
