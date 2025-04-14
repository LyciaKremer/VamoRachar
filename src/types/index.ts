export type Pessoa = {
  id: string;
  nome: string;
};

export type Item = {
  id: string;
  descricao: string;
  quantidade: number;
  valor: number;
  divididoEntre: string[];
};

export type AppState = {
  pessoas: Pessoa[];
  itens: Item[];
  taxa: number;
};
