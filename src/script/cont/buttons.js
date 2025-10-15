import { EL } from "@alexgyver/component";
import { checkAndAppend } from "./append";

export default function Buttons(obj, cur, sets, parent) {
    let root = EL.make('div', { class: 'buttons' + (obj.class_name ? ` ${obj.class_name}` : '') + (obj.id ? ` id_${obj.id}` : '') });
    parent.append(root);
    obj.content.filter(b => b.type == 'button').map(b => checkAndAppend(sets, root, b));
};