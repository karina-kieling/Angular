import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderizarProdutos()
  }

  renderizarProdutos() {
    let secaoProdutos:any = document.getElementById("secao_produtos")

    let listaProdutos = [
        {
            nome: "Mouse Gamer RGB",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Teclado Mecânico Gamer RGB",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse teclado possui Switches Blue",
            preco: 229.90
        },
        {
            nome: "Headset Gamer RGB",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse headset possui microfone integrado de ótima qualidade",
            preco: 199.90
        },
        {
            nome: "Mousepad Gamer RGB",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mousepad é do tipo Speed e possui RGB nas laterais",
            preco: 129.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        }        
    ]

    // Template Strings, usa crase como separador = ``
    let template = ""

    for(let index = 0; index < listaProdutos.length; index++) {
        template = template + `
        <div class="card">
            <img src="${ listaProdutos[index].imagem }" alt="">
            <h3>${ listaProdutos[index].nome }</h3>
            <p>${ listaProdutos[index].descricao }</p>
            <p>R$${ listaProdutos[index].preco }</p>
            <a href="#">Comprar</a>
        </div>
        `
    }

    secaoProdutos.innerHTML = template
}

}
