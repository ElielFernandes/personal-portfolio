import { ReactNode } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AnimationStyle } from './styled';
import Item from './src/Item';
import itemFactory from './src/ItemFactory';
import Physical from './src/Physical';

type Props = { 
    children: ReactNode
    size?: number
    quantityItems?: number
    minimumSpeed?: number
    maximumSpeed?: number;
}

export const Animation = ({children, size = 3.5, quantityItems = 50 , minimumSpeed = 0.3 , maximumSpeed = 0.8 }: Props) => {

    let ref = useRef<HTMLCanvasElement>(null);
    let div = useRef<HTMLDivElement>(null);

    let canvas: any;
    let context: any;
    let requestId: any;
    let items: Array<Item> = []; 
    let distance: number;

    let rgb = {
        red: 155,
        green: 189,
        blue: 255
    }

    useEffect(() => {

        canvas = ref.current;
        context = canvas.getContext('2d');

        window.addEventListener('resize', function() {
            screenRisize(canvas);
        }, true);
        
        screenRisize(canvas);
        
        items = itemFactory.create(
            canvas.width, 
            canvas.height, 
            size, 
            quantityItems, 
            minimumSpeed, 
            maximumSpeed,  
            false
        );

        render();

        return () => { 
            cancelAnimationFrame(requestId);
        }
    });

    const screenRisize = function (canvas: any) {

        canvas.width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    
        canvas.height =  (window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight);

        distance = canvas.width * 0.079 + 50;
    }
    
    const render = () => {

        context.clearRect(0,0, canvas.width, canvas.height);

        let j = 0;

        for(let i = 0; i < items.length; i++){

            context.beginPath();
            context.fillStyle = `rgba(${rgb.red},${rgb.green},${rgb.blue}, 0.8)`;
            context.arc(items[i].position.x, items[i].position.y, items[i].size, (Math.PI/180)*0, (Math.PI/180)*360, true );
            context.fill();

            for(j = 0; j < items.length; j++){

                let dist = items[i].position.coordinateDistance(items[j].position);
                if(dist < distance && i !== j){

                    let alpha = ((-dist / distance) + 0.9) * 0.6;
                    context.beginPath();
                    context.strokeStyle = `rgba(${rgb.red},${rgb.green},${rgb.blue},${alpha})`;
                    context.moveTo(items[i].position.x, items[i].position.y);
                    context.lineTo(items[j].position.x, items[j].position.y);
                    context.stroke();
                }

                if(dist < (items[i].size * 2) && i !== j){

                    let result = Physical.calculateCollision(items[i], items[j]);
                    items[i] = result.item1;
                    items[j] = result.item2;
                }
            }

            items[i].position.x += items[i].speed.x; 
            items[i].position.y += items[i].speed.y;

            if(!Physical.isPositionValidated(items[i], canvas.width, canvas.height)){
                
                items[i] = itemFactory.genarete(canvas.width, canvas.height, size, minimumSpeed, maximumSpeed);
            }

            j++;
        }

        requestId = requestAnimationFrame(render);
    };
    
    return (
        <AnimationStyle className='teste' ref={div}>
            <canvas ref={ref} style={{ width: '100vw', height: '99vh' }}>
                Your browser does not support the HTML canvas tag.
            </canvas>
            <div className='ch'>{children}</div>
        </AnimationStyle>
    );
};