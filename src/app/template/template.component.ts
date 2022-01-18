import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  golpes = [
    {
      id: 'WhatsApp',
      title: 'WhatsApp',
      img: 'https://i.ibb.co/cNnHyRc/Ellipse-50.png',
      steps: [
        {
          title: 'COMO PREVENIR?',
          description: [
            'Ajuste a visualização da imagem da conta do WhatsApp apenas para contatos autorizados;',
            'Fique atento a mensagens de conhecidos ou familiares solicitando depósito e/ou transferências bancárias (ainda mais se for em nome de terceiros);',
            'Desconfie de contas com fotos de conhecidos, mas com números diferentes;'
          ]
        },
        {
          title: 'O QUE FAZER?',
          description: ['Registrar um Boletim de Ocorrência e denunciar ao WhatsApp através do e-mail: suporte@whatsapp.com. Também é possível denunciar clicando no número do golpe, clicar no campo "Dados do contato" e clicar em "denunciar". Avisar familiares e conhecidos, no caso de detectar que estão utilizando seu nome para aplicar o golpe.']
        },
      ]
    },
    {
      id: 'GolpeDoAmor',
      title: 'Golpe do Amor',
      img: 'https://i.ibb.co/YRrrYCx/Ellipse-49.png',
      steps: [
        {
          title: '',
          description: ['']
        }
      ]
    },
    {
      id: 'FalsoEmprestimo',
      title: 'Falso Empréstimo',
      img: 'https://i.ibb.co/9tC3ZD1/Ellipse-48.png',
      steps: [
        {
          title: '',
          description: ['']
        }
      ]
    },
    {
      id: '',
      title: '',
      img: 'https://i.ibb.co/cNnHyRc/Ellipse-50.png',
      steps: [
        {
          title: '',
          description: ['']
        }
      ]
    },
  ]

  searchText = '';
  onHome = true;
  selectedGolpe: any;

  constructor(private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      if (params['golpe']) {

        this.golpes.map(golpe => {
          if (golpe.id === params['golpe']) {
            this.selectedGolpe = golpe;
          }
        })

        this.onHome = false;

      } else {
        this.onHome = true;
      }
    })
  }

  ngOnInit(): void {
  }

  get filteredList(): any[] {
    if (this.searchText) {
      return this.golpes.filter( item => item.title.toLocaleUpperCase().includes(this.searchText.toLocaleUpperCase()));
    } else {
      return this.golpes;
    }
  }

  scrollUp(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

}
