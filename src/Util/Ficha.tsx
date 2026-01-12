export type Atributo = {
    valor: number;
    modificador: number;
}
export type Item = {
    id: string;
    nome: string;
    quantidade: number;
}
export type Magia = {
    id: string;
    efeito: string;
    custo: string;
}

export type Arma = {
  id: string;
  nome: string;
  encantamento: string;
  dano: string;
  custo: string;
};

export type Armadura = {
  id: string;
  nome: string;
  defesa: number;
};

export type Ficha = {
    jogador: string;
    nome: string;
    vida: {
        atual: number;
        max: number;
    };
    classe: string;
    raca: string;
    mana: {
        atual: number;
        max: number;
    };
    atributos: {
        for: Atributo;
        agi: Atributo;
        int: Atributo;
        car: Atributo;
        vig: Atributo;
        des: Atributo;
        srt: Atributo;
    };
    dinheiro: {
        ouro: number;
        prata: number;
        cobre: number;
    };
    reputacao: {
        generalistas: number;
        puristas: number;
        karma: number;
    };
    equipamentos: {
        armas: Arma[];
        armaduras: Armadura[];
    };
    inventario: Item[];
    magias: Magia[];
}