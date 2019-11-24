import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { DetalleComponent } from "../detalle/detalle.component";
import { LocalesService } from '../services/locales.service';
import { local } from '../clases/local';
//import { Local } from '../../../node_modules/protractor/built/driverProviders';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartType, ChartOptions, ChartDataSets  } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  perfil:any;
  listaLocales;

  nombre;
  telefono;
  cuit;
  razon_social;
  foto;


  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      color:"white"
    },
  ];
  

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  //displayedColumns: string[] = ['position', 'mesa', 'name', 'weight', 'symbol'];
  constructor(private dialog: MatDialog,private httpLocal: LocalesService) { }


  

  ngOnInit() {

    /*let vari={idPedido:1,mesaPedido:"Juan Perez",producto:"Detalle",sector:"14/9/19 14:30",estado:"pendiente",tiempoPreparacion:5};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);*/
  }

  openDetalle(){
    //this.dialog.open(DetalleComponent, {width:'300px', height:'250px'});
    //this.TraerLocales();
  }

  /*TraerLocales(){
    this.httpLocal.TraerLocales().subscribe(data=>{
      this.listaLocales= JSON.parse(data._body);
    console.log(this.listaLocales);
   });
  }*/

guardar()
  {

    var prod=new local();
    prod.nombre=this.nombre;
    prod.telefono=this.telefono;
    prod.cuit=this.cuit;
    prod.razon_social=this.razon_social;
    prod.foto=this.foto;


    /*this.httpLocal.IngresarLocal(prod)
    .subscribe(

      (data)=>{
     let res=JSON.parse(data._body);
      //this.elPedido.id= res.idPedido;
      console.log(res);
    })*/
  }


  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

}
