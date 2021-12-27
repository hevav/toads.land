<script>
    export let selected, onclick
</script>

<div class="inline-flex flex-col justify-center items-center relative border-2 border-neutral-800 text-lime-50 m-4 rounded-full w-24 h-24 cursor-pointer"
        class:border-lime-400={selected} on:click={onclick}>
    <slot/>
</div>