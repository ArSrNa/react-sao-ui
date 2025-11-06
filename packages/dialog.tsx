import style from './index.module.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactNode, useEffect, useRef, useState } from 'react';
import { cancel, ok } from './icons';

gsap.registerPlugin(useGSAP);

export default function Component() {
    return <h1 className={style['main']}>Powered by Ar-Sr-Na</h1>
}


export function Dialog(props: {
    title: ReactNode;
    body: ReactNode;
    show: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    footer?: ReactNode;
    height?: number;
}) {
    const { show, title, body, onOk, onCancel, footer, height = 150 } = props;
    const dialog = useRef(null);
    useEffect(() => {
        dialog.current.style.display = 'none'
    }, []);
    useGSAP(async () => {
        const tl = gsap.timeline({
            yoyo: true,
        });

        tl.fromTo(`.${style['dialog']}`, {
            opacity: 0,
            duration: 0.3,
            ease: "power3.inOut"
        }, {
            opacity: 1,
        }, 0);

        tl.fromTo(`.${style['dialog-body']}`, {
            height: 0,
            lineHeight: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power3.inOut"
        }, {
            opacity: 1,
            lineHeight: 1,
            height,
        }, 0);

        if (props.show) {
            dialog.current.style.display = '';
            tl.play();
        } else {
            tl.progress(1);
            await tl.reverse();
            dialog.current.style.display = 'none';
            tl.kill();
        }
    }, [show]);

    return <div className={style['dialog']} ref={dialog}>
        <div className={style['dialog-title']}>
            {title}
        </div>
        <div className={style['dialog-body']}>
            {body}
        </div>
        <div className={style['dialog-footer']}>
            {footer || <div className={style.icon}>
                <img src={ok} onClick={onOk} />
                <img src={cancel} onClick={onCancel} />
            </div>}
        </div>
    </div>
}