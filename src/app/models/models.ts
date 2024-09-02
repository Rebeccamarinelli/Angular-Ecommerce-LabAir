export interface IProdottiRes {
  prodotti: IProdotti[]
}

export interface IProdotti {
  id: number
  nome: string
  categoria: string
  prezzo: number
  taglie_disponibili: string[]
  colori_disponibili: string[]
  colori_immagini: string[]
  coloreSelezionato?: string,
  tagliaSelezionata?: string,
  immagineSelezionata?: string,
  quantity?: number
  immagini_dettaglio: string[]
  descrizione: string
  immagine: string
  nuovo_arrivi: boolean
  best_seller: number
}


export interface singleShoe {
    immagine: string
    titolo: string
    categoria: string
    prezzo: string
  }

export interface ICardsHome {
  immagine: string
  titolo: string
}


export interface IColor {
  name: string
  color: string
}


export interface ILoginInfo{
  email:string,
  password:string
}