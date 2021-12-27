<script>
    export let title, subtitle, limSize, gray, inactive, limWidth
</script>

<div class="grid m-2 p-4 rounded-xl text-lime-50 bg-gradient-to-tl shadow-md max-w-full"
     class:flex-1={!limSize} class:min-w-max={limSize} class:w-max={limWidth}
     class:from-lime-600={!inactive} class:to-lime-900={!inactive} class:from-neutral-600={inactive} class:to-neutral-900={inactive}>
    <div class="font-extrabold m-2 text-4xl tracking-tight">
        {title}
    </div>
    {#if subtitle}
        <div class="mx-4">
            {subtitle}
        </div>
    {/if}
    <br>
    <slot/>
</div>