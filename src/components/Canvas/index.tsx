import {ReactNode} from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { CanvasStyle } from './styled';


const getPixelRatio = (context:any) => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
    return (window.devicePixelRatio || 1) / backingStore;
};

type Props = {
    children: ReactNode;
}

export const Canvas = ({children}: Props) => {
    let ref = useRef<HTMLCanvasElement>(null);


    useEffect(() => {
        let canvas:any = ref.current;
        let context = canvas.getContext('2d');


        let ratio = getPixelRatio(context);

        

        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);

        console.log(width);

        canvas.width = parseInt(width) * ratio;
        canvas.height = parseInt(height) * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        let requestId:any;
        let i = 0;



        const render = () => {
            context.clearRect(0,0, width, height);
            for(let i = 0; i < itens.length; i++)
            {



                context.beginPath();
                context.fillStyle = 'rgba(155, 189, 255, 1)';
                //context.fillStyle = 'rgb('+ Math.random()*255+','+Math.random()*255+','+ Math.random()*255+')';
                context.arc(itens[i].position_x, itens[i].position_y, 3.5, (Math.PI/180)*0, (Math.PI/180)*360, true );
                context.fill();


                for(let j = 0; j < itens.length; j++)
                {
                    

                    let dist = Math.sqrt((Math.pow( itens[j].position_x - itens[i].position_x , 2)) + (Math.pow(itens[j].position_y - itens[i].position_y , 2)));

                    if(dist < 200)
                    {
                        //cor = -0.0004 * dist + 0.10044;
                        //cor = -0.00095477 * dist + 0.200954;
                        let cor = -0.0014572 * dist + 0.30144;
                        context.beginPath();
                        context.strokeStyle = 'rgba(155, 189, 255,'+ cor +')';
                        context.moveTo(itens[i].position_x, itens[i].position_y);
                        context.lineTo(itens[j].position_x, itens[j].position_y);
                        context.stroke();
                    }
                }


                itens[i].position_x = itens[i].position_x + itens[i].velo_x;
                itens[i].position_y = itens[i].position_y + itens[i].velo_y;


                if(itens[i].velo_x >= 0) {
                   if(itens[i].position_x > itens[i].final_x)
                   {
                        itens[i] = genareteInitialItem();
                   }     
                }
                else{
                    if(itens[i].position_x < itens[i].final_x)
                    {
                        itens[i] = genareteInitialItem();
                    } 
                }

                //itens[i].position_x = itens[i].position_x + 10;
                //itens[i].position_y = itens[i].position_y + 10;
            
            }
            requestId = requestAnimationFrame(render);
        };



        let itens:any = [];

        function generateInitialItens()
        {
            for(let i = 0; i < 50; i++)
            {
                itens[i] = genareteInitialItem();
            } 
        }

        function genareteInitialItem()
        {
            

            let initial_y :number  , initial_x :number , final_x :number , final_y :number ;
    
            let line: number = Math.round(Math.random() * 4);

            if( line === 1 || line === 2 ){

                initial_y = Math.round(Math.random() * parseInt(height));
                initial_x = line == 1 ? 0 : parseInt(width)

                let lineFinal : number = Math.round(Math.random() * 4);
                lineFinal = lineFinal === line ? 3 : lineFinal;

                if( lineFinal === 1 || lineFinal === 2 )
                {
                    final_y = Math.round(Math.random() * parseInt(height));
                    final_x = lineFinal == 1 ? 0 : parseInt(width) 
                }
                else
                {
                    final_x = Math.round(Math.random() * parseInt(width));
                    final_y = lineFinal == 3 ? 0 : parseInt(height);
                }
            }
            else
            {

                initial_x = Math.round(Math.random() * parseInt(width));
                initial_y = line == 3 ? 0 : parseInt(height)

                let lineFinal : number = Math.round(Math.random() * 4);
                lineFinal = lineFinal === line ? 1 : lineFinal;

                if( lineFinal === 1 || lineFinal === 2 )
                {
                    final_y = Math.round(Math.random() * parseInt(height));
                    final_x = lineFinal == 1 ? 0 : parseInt(width) 
                }
                else
                {
                    final_x = Math.round(Math.random() * parseInt(width));
                    final_y = lineFinal == 3 ? 0 : parseInt(height);
                }
            }


            let item: Item  = {
                initial_x: initial_x,
                initial_y: initial_y,
                final_x: final_x,
                final_y: final_y,
                position_x: initial_x, 
                position_y: initial_y,
                velo_x: 0,
                velo_y: 0,
                h: 0
            }

            let f_x = parseFloat(item.final_x);
            let i_x = parseFloat(item.initial_x);
            let f_y = parseFloat(item.final_y);
            let i_y = parseFloat(item.initial_y);
            let velo : number = randomIntFromInterval(0.3, 0.6);


            let h = Math.sqrt((Math.pow( f_x - i_x , 2)) + (Math.pow(f_y - i_y , 2)));
            item.velo_x = velo *((f_x - i_x) / h);
            item.velo_y = velo *((f_y - i_y) / h);
            item.h = h;

            return item;
        }

        function randomIntFromInterval(min:number, max :number) 
        {
            return Math.random() * (max - min + 1) + min;
        }


        generateInitialItens();
        console.log(itens);
        render();

        return () => {
            cancelAnimationFrame(requestId);
        }

    });

    type Item = {
        initial_x: any,
        initial_y: any,
        final_x: any,
        final_y: any,
        position_x: any, 
        position_y: any,
        velo_x: any,
        velo_y:any,
        h: any
    }

    return (
        <CanvasStyle className='teste'>
            <canvas ref={ref} style={{ width: '100vw', height: '99.3vh' }}>
                Your browser does not support the HTML canvas tag.
            </canvas>
            <div className='ch'>{children}</div>
        </CanvasStyle>
    );
};



