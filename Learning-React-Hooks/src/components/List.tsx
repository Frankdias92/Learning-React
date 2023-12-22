import { useEffect, useState } from "react";

interface ItemProps {
  id?: string;
  title?: string;
  name?: string;
}

interface ListProps {
  getItems: () => Promise<ItemProps[]>;
}

const List = ({ getItems }: ListProps) => {
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    getItems()
      .then((result) => setItems(result))
      .catch((error) => console.error('Erro ao obter itens', error))
  }, [getItems])

  return (
    <ul className="">
      {items.length > 0 ? (
        items.map((item) => (
          <li className="li-wrapper" key={item.id}>
            {item?.title || item?.name}
          </li>
        )
      )) : (
        <p>Nenhum item Disponivel</p>
      )}
    </ul>
  );
};

export default List;
