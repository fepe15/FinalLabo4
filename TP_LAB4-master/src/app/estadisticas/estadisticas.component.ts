import { Component, OnInit } from '@angular/core';
import { Highcharts,  Chart } from 'angular-highcharts';
import { MesasService } from '../services/mesas.service';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  listaMesas;
  constructor(private httpMesa: MesasService) { }
  chart: Chart;
  dataUsos: Array<any> = new Array() ;

  ngOnInit() {
    
    this.TraerLasMesas();
    this.init2();
  }

  
  TraerLasMesas()
  {
    this.httpMesa.TraerMesas().subscribe(data=>{
      this.listaMesas= JSON.parse(data._body);

      localStorage.setItem('datosUso', JSON.stringify(this.listaMesas) ); 

    });

  }


  init2() {
  
    Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'CANTIDAD DE USOS POR MESAS'
      },
      subtitle: {
          text: 'FUENTE: Consulta SQL'
      },
      xAxis: {
          categories: ['MESA 1', 'MESA 2', 'MESA 3', 'MESA 4', 'MESA 5', 'MESA 6'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Cantidad de usos',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          shadow: true
      },
      credits: {
          enabled: false
      },

      series: [
        {
          name: 'ID MESA',
          data: [1, 2, 3, 4, 5, 6]
        } ,
      
      {
          name: 'USOS',
          // data: [23, 88, 16, 18, 54, 32]
          data: [
            JSON.parse(localStorage.getItem('datosUso'))[0].canUsos,
            JSON.parse(localStorage.getItem('datosUso'))[1].canUsos,
            JSON.parse(localStorage.getItem('datosUso'))[2].canUsos,
            JSON.parse(localStorage.getItem('datosUso'))[3].canUsos,
            JSON.parse(localStorage.getItem('datosUso'))[4].canUsos,
            JSON.parse(localStorage.getItem('datosUso'))[5].canUsos,
          ]
      }
      ]
  });

  localStorage.removeItem('datosUso'); 


  }




}