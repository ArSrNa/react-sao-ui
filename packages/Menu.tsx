import style from './index.module.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { PropsWithChildren, ReactNode, useState } from 'react';
import { cancel, ok } from './icons';

gsap.registerPlugin(useGSAP);

interface MenuItem {
    label: string,
    icon: ReactNode,
    pannel: {
        title: ReactNode,
        body: ReactNode
    }
}

export function Menu(props: PropsWithChildren<{
    items: MenuItem[]
}>) {
    const [current, setCurrent] = useState(null);
    const [pannel, setPannel] = useState(props.items[0].pannel);
    return <div className={style['menu']}>
        <div className={style.trigger} onClick={() => setCurrent(0)}>{props.children}</div>
    </div>
}

