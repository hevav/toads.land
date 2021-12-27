<script>
    export let type = "text", placeholder, value, rightholder

    function handle(e) {
        value = type.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value;
    }
</script>

{#if placeholder}
    <label class="m-2 text-xl tracking-tight">
        {placeholder}
    </label>
{/if}
<div class="bg-neutral-900 border-neutral-800 border-2 cursor-pointer text-neutral-50 flex flex-row m-2 tracking-tight">
    <input class="px-4 py-2 w-full bg-neutral-900" type={type} placeholder={placeholder || ""}
            on:input={handle} value={value}>
    {#if rightholder}
        <span class="px-4 py-2">
            {rightholder}
        </span>
    {/if}
</div>