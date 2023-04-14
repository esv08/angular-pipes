import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{
    
    transform(valor: string, enMayus: boolean = true): string {
        return (enMayus) 
            ? valor.toUpperCase()       //si el parametro es true lo pone en UPPER
            : valor.toLowerCase();      //si el parametro es false lo deja en LOWER
    }
}


