<script>
    export let fullSize = false
</script>

<button class="inline text-2xl px-8 py-4 tracking-tight text-neutral-100 mt-12 border-neutral-800 hover:border-lime-900 border-2 shadow-md hover:shadow-xl transition duration-250 cursor-pointer" class:w-full={fullSize}>
    <slot/>
</button>