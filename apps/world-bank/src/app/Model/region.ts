export interface Region{
  Id: string;
  Codigo:string;
  CodigoISO2: string;
  Nombre: string;
}

export class cRegion{
  Id: string;
  Codigo:string;
  CodigoISO2: string;
  Nombre: string;

  constructor(reg: any){
    this.Id = reg.id;
    this.Codigo = reg.code;
    this.CodigoISO2 = reg.code2iso;
    this.Nombre = reg.name;
  }
}
