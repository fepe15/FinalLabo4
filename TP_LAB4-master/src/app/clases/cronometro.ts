export class Cronometro {
   public seg;
   public min;
   public tiempo;

    constructor(tEspera)
    {
        this.Cronometro(tEspera);
    }

    Cronometro(tEspera){
        var arrayTiempo = tEspera.split(":");
        //console.log(arrayTiempo);
        this.min=arrayTiempo[0];
        this.seg=60;
        var control;
    
        control=setInterval(()=>{
    
    
        if(this.min==0 && this.seg ==0)
        {
         
            clearInterval(control);
        }
    
        this.seg--;
        if(this.seg==0o0 && this.min !=0){
    
            this.seg=59;
            this.min--;
        }
       /* if(this.min==0 && this.seg <0)
        {
            this.seg=0;
        }*/
    
        tEspera= this.min + ":" + this.seg;
        
       
     
        }, 1000,)
    }

}
