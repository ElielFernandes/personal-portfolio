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

export const Animation = ({children, size = 3.5, quantityItems = 50 , minimumSpeed = 0.2 , maximumSpeed = 0.8 }: Props) => {

    const ref = useRef<HTMLCanvasElement>(null);
    const div = useRef<HTMLDivElement>(null);
    let canvas: any;
    let content: any;
    let context: any;
    let requestId: any;
    let items: Array<Item> = []; 
    let distance: number;

    const rgb = {
        red: 155,
        green: 189,
        blue: 255
    }

    useEffect(() => {

        canvas = ref.current;
        content = div.current;
        context = canvas.getContext('2d');

        window.addEventListener('resize', function() {
            screenResize(canvas, content);
        }, true);
        
        screenResize(canvas, content);
        
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

    const screenResize = function (canvas: any, content: any) {
        
        canvas.width = content.clientWidth;
        canvas.height =  content.clientHeight;

        distance = canvas.width * 0.079 + 50;
    }
    
    const render = () => {

        context.clearRect(0,0, canvas.width, canvas.height);

        let j = 0;

        for(let i = 0; i < items.length; i++){

            context.beginPath();
            context.fillStyle = `rgba(${rgb.red},${rgb.green},${rgb.blue}, 0.8)`;
            context.arc(items[i].position.x, items[i].position.y, items[i].size, 0, (Math.PI/180)*360, true );
            context.fill();

            for(j = 0; j < items.length; j++){

                const dist = items[i].position.coordinateDistance(items[j].position);
                if(dist < distance && i !== j){

                    const alpha = ((-dist / distance) + 0.9) * 0.6;
                    context.beginPath();
                    context.strokeStyle = `rgba(${rgb.red},${rgb.green},${rgb.blue},${alpha})`;
                    context.moveTo(items[i].position.x, items[i].position.y);
                    context.lineTo(items[j].position.x, items[j].position.y);
                    context.stroke();
                }

                if(dist < (items[i].size * 2) && i !== j){

                    const result = Physical.calculateCollision(items[i], items[j]);
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
        <AnimationStyle>
            <canvas ref={ref}>
                Your browser does not support the HTML canvas tag.
            </canvas>
            <div ref={div} className='content' >{children}</div>
        </AnimationStyle>
    );
};