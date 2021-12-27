<script>
    import {isActive, goto} from "@roxi/routify";

    export let to, self, noHover

    function go() {
        $goto(to, {})
    }
</script>

<div class="inline" class:hover:text-lime-600={!noHover} on:click={go} class:text-lime-200={$isActive(to)} class:m-4={self}>
    <slot/>
</div>