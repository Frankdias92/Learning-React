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
    <div className="dadosPosition">
      {items.length > 0 ? (
        items.map((item) => (
          <p key={item.id}>
            {item?.title || item?.name}
          </p>
        )
      )) : (
        <p>Nenhum item Disponivel</p>
      )}
    </div>
  );
};

export default List;
