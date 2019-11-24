import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { DetalleComponent } from "../detalle/detalle.component";
import { LocalesService } from '../services/locales.service';
import { local } from '../clases/local';
//import { Local } from '../../../node_modules/protractor/built/driverProviders';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartType, ChartOptions, ChartDataSets  } from 'chart.js';
import { Label } from 'ng2-charts';
import { PedidoService } from '../services/pedido.service';

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

  listaPedidos:Array<any>;
  listaPagos:Array<any>;

  nombre;
  telefono;
  cuit;
  razon_social;
  foto;

  //this.pieChartOptions.legend.position
  public pieChartOptions: ChartOptions = {
    responsive: true,
    title:{
      fontColor:"#ffffff"
    },
    legend: {
      
      position:'top',
      labels: {
        fontColor: '#ffffff'
       }
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
      borderColor:"white",

    },
  ];
  

  public barChartOptions: ChartOptions = {
    responsive: true,
    title:{
      fontColor:"#ffffff"
    },
    tooltips:{footerFontColor:"#ffffff"},
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{
        ticks: {
            beginAtZero:true,
            fontColor: '#F8D3E0' // y-Axes color you want to add
        },
    }], yAxes: [{
      ticks: {
        beginAtZero:true,
        fontColor: '#F8D3E0' // y-Axes color you want to add
    },
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];
  public barChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      borderColor:"white",
      color:"white",
    },
  ];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pedidos' }
    
  ];

  coloresGraficos;
  //displayedColumns: string[] = ['position', 'mesa', 'name', 'weight', 'symbol'];
  constructor(private dialog: MatDialog,private httpLocal: LocalesService,private httpPedido: PedidoService) { }


  

  ngOnInit() {

    /*let vari={idPedido:1,mesaPedido:"Juan Perez",producto:"Detalle",sector:"14/9/19 14:30",estado:"pendiente",tiempoPreparacion:5};
    this.listaPendientes=new Array();
    this.listaPendientes.push(vari);*/
    this.TraerPedidos();
    //console.log(this.pieChartOptions.tooltips.footerFontColor);
  }
  TraerPedidos(){
    this.httpPedido.TraerTodosLosPedidos().subscribe(data=>{
      this.listaPedidos= JSON.parse(data._body);
     //console.log(this.listaPedidos);
     this.CargarBarras();
     this.TraerPagos();
   }); 
   
  }

  TraerPagos(){
    this.httpPedido.TraerTodosPagos().subscribe(data=>{
      this.listaPagos= JSON.parse(data._body);
      this.CargarTorta();
      //console.log(this.listaPagos);
   });
  }

  CargarBarras()
  {

      let nombre=[];
      let data=[];

      this.listaPedidos.forEach(element => {
       if (nombre.indexOf(element.nombre)==-1) 
       {
         nombre.push(element.nombre);
       }
      });
      //console.log(nombre);
      let colores=[]
      nombre.forEach(nom => {
        let cantPedidos=0;
        colores.push(this.getRandomColor());
        this.listaPedidos.forEach(element => {
        if (element.nombre==nom) 
        {
          cantPedidos=cantPedidos+1;
        }
       });
       data.push(cantPedidos)

      });
      //console.log(data);
      
      this.barChartLabels=nombre;
      this.barChartData=[ { data: data }];
      this.coloresGraficos=colores
      this.barChartColors = [
        {
          backgroundColor: colores,
          borderColor:"white",
          color:"white",
        },
      ];
      
  }

  CargarTorta()
  {
      let nombre=[];
      let id_local=[];

      this.listaPedidos.forEach(element => {
       if (nombre.indexOf(element.nombre)==-1) 
       {
         nombre.push(element.nombre);
         id_local.push(element.id_local);
       }
      });
      console.log(id_local);
      let montos=[];
      let colores=[]
      id_local.forEach(id => {
        let monto=0;
        colores.push(this.getRandomColor());

        this.listaPagos.forEach(element => {
        if (element.id_local==id) 
        {
          monto=monto+element.monto;
        }
       });
       montos.push(monto)

      });



      console.log(montos);
      this.pieChartLabels=nombre;
      this.pieChartData=montos;
      this.pieChartColors = [
        {
          backgroundColor: this.coloresGraficos,
          borderColor:"white",
    
        },
      ];
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
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
