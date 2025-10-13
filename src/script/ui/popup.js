import { EL } from "@alexgyver/component";
import './popup.css';

export default function popup(data, text, error = true) {
    let popup = EL.make('div', {
        class: 'popup' + (data.class_name ? ` ${data.class_name}` : ''),
        style: {
            animation: 'fadeInOut 3.0s',
            background: error ? 'var(--error)' : 'var(--accent)',
        },
        text: text,
        parent: document.getElementsByClassName('popup_cont')[0],
    });
    setTimeout(() => popup.remove(), 2500);
}