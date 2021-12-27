<script>
    export let center, limSize
</script>

<div class="flex flex-col-reverse md:flex-row" class:items-center={center} class:min-w-max={limSize}>
    <slot/>
</div>