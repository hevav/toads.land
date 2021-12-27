import {get, writable} from "svelte/store";
import ru from "./_i18n/ru";
import kz from "./_i18n/kz";
import ua from "./_i18n/ua";

const langs = {
    "ru": {prefix: "ru", html: "ru", strings: ru},
    "uk": {prefix: "ua", html: "ua", strings: ua},
    "ua": {prefix: "ua", html: "ua", strings: ua},
    "kk": {prefix: "kz", html: "kz", strings: kz},
    "kz": {prefix: "kz", html: "kz", strings: kz},
}

const [clientLanguage] = navigator.language.split('-');
const language = writable(langs[clientLanguage] || langs['ru'])
document.documentElement.lang = get(language).html;

export { language }