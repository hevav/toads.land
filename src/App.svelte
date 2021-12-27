<script>
    import {Router, metatags} from "@roxi/routify";
    import {routes} from "../.routify/routes";
    import "./global.css"
    import {language} from "./pages/_i18n";

    $: {
        metatags.title = $language.strings.title
        metatags.description = $language.strings.description
    }
</script>

<Router {routes}/>