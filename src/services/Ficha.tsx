type Atributo = {
    valor: number;
    modificador: number;
}

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
}