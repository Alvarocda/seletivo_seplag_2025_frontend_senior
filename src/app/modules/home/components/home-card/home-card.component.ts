import { Component, Input, OnInit } from '@angular/core';
import { IDesaparecido, ListaSexos } from '../../home.types';

@Component({
    selector: 'app-home-card',
    templateUrl: 'home-card.component.html',
    standalone: false
})

export class HomeCardComponent implements OnInit {
    listaSexos = ListaSexos;

    @Input({required: true})
    desaparecido!: IDesaparecido


    constructor() { }

    ngOnInit() { }
}