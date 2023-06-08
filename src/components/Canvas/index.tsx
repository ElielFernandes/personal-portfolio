import { ReactNode } from 'react';
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
    let div = useRef<HTMLDivElement>(null);

    let rgb = {
        red: 155,
        green: 189,
        blue: 255
    }

    let quantityItems = 50;
    let speedRange = [0.3, 1.2];
    let itemSize = 3.2;

    let distance = 200;


    let width :number;
    let height :number;

    let requestId:any;

    let itens:any = [];


    useEffect(() => {

        let canvas:any = ref.current;
        let context = canvas.getContext('2d');
        let ratio = getPixelRatio(context);

        if(!div.current) return
        let teste :any = div.current.getBoundingClientRect();

        width = canvas.width = parseInt(teste.width) * ratio;
        height = canvas.height = parseInt(teste.height) * ratio;

        window.addEventListener('resize', function() {

            if(!div.current) return
            let teste :any = div.current.getBoundingClientRect();

            width = canvas.width = parseInt(teste.width) * ratio;
            height = canvas.height = parseInt(teste.height) * ratio;

        }, true);

        const render = () => {

            context.clearRect(0,0, width, height);

            for(let i = 0; i < itens.length; i++)
            {
                context.beginPath();
                context.fillStyle = `rgba(${rgb.red},${rgb.green},${rgb.blue}, 0.8)`;
                context.arc(itens[i].position_x, itens[i].position_y, itemSize, (Math.PI/180)*0, (Math.PI/180)*360, true );
                context.fill();

                for(let j = 0; j < itens.length; j++)
                {
                    let dist = Math.sqrt((Math.pow( itens[j].position_x - itens[i].position_x , 2)) + (Math.pow(itens[j].position_y - itens[i].position_y , 2)));

                    if(dist < distance)
                    {
                        let alpha = (-0.0014572 * dist + 0.30144) * 1.5;
                        context.beginPath();
                        context.strokeStyle = `rgba(${rgb.red},${rgb.green},${rgb.blue},${alpha})`;
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
            }
            requestId = requestAnimationFrame(render);
        };

        generateInitialItens();
        render();

        return () => {
            cancelAnimationFrame(requestId);
        }

    });

    const generateInitialItens = () => {
        for(let i = 0; i < quantityItems; i++)
        {
            itens[i] = genareteInitialItem(false);
        } 
    }

    const genareteInitialItem = (borderPosition: boolean = true) =>  {

        let initial_y :number  , initial_x :number , final_x :number , final_y :number ;

        let line: number = Math.round(Math.random() * 4);
        let lineFinal : number = Math.round(Math.random() * 4);

        if( line === 1 || line === 2 ){

            initial_y = Math.round(Math.random() * height);
            initial_x = borderPosition 
            ? line === 1 ? 0 : width
            : Math.round(Math.random() * width);
             
            lineFinal = lineFinal === line ? 3 : lineFinal;
        }
        else
        {
            initial_x = Math.round(Math.random() * width);
            initial_y = borderPosition 
            ? line === 3 ? 0 : height
            : Math.round(Math.random() * height);
            lineFinal = lineFinal === line ? 1 : lineFinal;
        }

        if( lineFinal === 1 || lineFinal === 2 )
        {
            final_y = Math.round(Math.random() * height);
            final_x = lineFinal === 1 ? 0 : width 
        }
        else
        {
            final_x = Math.round(Math.random() * width);
            final_y = lineFinal === 3 ? 0 : height;
        }

        let velo : number = randomIntFromInterval(speedRange[0], speedRange[1]);
        let distance = Math.sqrt((Math.pow( final_x - initial_x , 2)) + (Math.pow(final_y - initial_y , 2)));
        let velo_x = velo *((final_x - initial_x) / distance);
        let velo_y = velo *((final_y - initial_y) / distance);

        return itemFactory(final_x, final_y, initial_x, initial_y, velo_x, velo_y);
    }


    function randomIntFromInterval(min:number, max :number) 
    {
        return Math.random() * (max - min + 1) + min;
    }

    const itemFactory = (final_x: number, final_y: number, position_x: number, position_y: number, velo_x: number, velo_y: number) => {
        return {
            final_x: final_x,
            final_y: final_y,
            position_x: position_x,
            position_y: position_y,
            velo_x: velo_x,
            velo_y: velo_y
        }
    }

    return (
        <CanvasStyle className='teste' ref={div}>
            <canvas ref={ref} style={{ width: '100vw', height: '99vh' }}>
                Your browser does not support the HTML canvas tag.
            </canvas>
            <div className='ch'>{children}</div>
        </CanvasStyle>
    );
};



