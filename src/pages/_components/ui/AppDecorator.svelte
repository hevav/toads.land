<script>
    import {slide} from "svelte/transition"
</script>

<div class="flex flex-col items-center" transition:slide|local>
    <slot/>
</div>